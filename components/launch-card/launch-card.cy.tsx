import {
  failedPreviousLaunch,
  successfulPreviousLaunch,
  upcomingLaunchWithFutureDate,
  upcomingLaunchWithPastDate,
} from "@/cypress/fixtures/launch.stubs";
import Launch from "@/interfaces/launch";
import { formatDate } from "@/utils/format";
import React from "react";
import LaunchCard from "./launch-card";

const displayCorrectData = (launch: Launch) => {
  cy.mount(<LaunchCard launch={launch} />);

  // Verifying the flight number
  cy.contains("div", launch.flight_number).should("be.visible");

  // Verifying the title
  cy.contains("h2", launch.upcoming ? "Next Launch" : "Previous Launch").should(
    "be.visible"
  );

  // Verifying the launch name
  cy.contains("div", launch.name).should("be.visible");

  // Verifying the formatted date
  cy.contains("div", formatDate(launch.date_utc, "lll")).should("be.visible");

  // Verifying upcoming behavior
  if (launch.upcoming) {
    if (launch.date_utc > new Date()) {
      cy.contains("span", "4d").should("be.visible");
      cy.contains("span", "23h").should("be.visible");
      cy.contains("span", "59m").should("be.visible");
      cy.contains("span", "59s").should("be.visible");
    } else {
      cy.contains("span", "The SpaceX-API may be outdated").should(
        "be.visible"
      );
    }
  } else {
    if (launch.success) {
      cy.contains("span", "Successful Launch");
    } else {
      cy.contains("span", "Launch Failure");
    }
  }

  // Verifying the actions
  cy.get("a").should("have.length", 3);

  if (launch.links) {
    cy.get("a")
      .eq(0)
      .should(
        "have.attr",
        "href",
        `${launch.links.article ? launch.links.article : ""}`
      );

    cy.get("a")
      .eq(1)
      .should(
        "have.attr",
        "href",
        launch.links.youtube_id
          ? `https://www.youtube.com/watch?v=${launch.links.youtube_id}`
          : ""
      );

    cy.get("a").eq(2).should("have.attr", "href", `${launch.links.wikipedia}`);
  }
};

describe("LaunchCard with upcomingLaunchWithFutureDate", () => {
  it("displays the correct data", () => {
    displayCorrectData(upcomingLaunchWithFutureDate);
  });
});

describe("LaunchCard with upcomingLaunchWithPastDate", () => {
  it("displays the correct data", () => {
    displayCorrectData(upcomingLaunchWithPastDate);
  });
});

describe("LaunchCard with successfulPreviousLaunch", () => {
  it("displays the correct data", () => {
    displayCorrectData(successfulPreviousLaunch);
  });
});

describe("LaunchCard with failedPreviousLaunch", () => {
  it("displays the correct data", () => {
    displayCorrectData(failedPreviousLaunch);
  });
});
