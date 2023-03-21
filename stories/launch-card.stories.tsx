import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LaunchCard from "../components/launch-card/launch-card";
import Launch from "../interfaces/launch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Launch Card",
  component: LaunchCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LaunchCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LaunchCard> = (args) => (
  <LaunchCard {...args} />
);

const day = 1000 * 60 * 60 * 24;

const date = new Date();

const futureDate = new Date(+date + (day * 5)); 
const pastDate = new Date(+date - (day * 5));

const launchFutureNext: Launch = {
  links: {
    youtube_id: "5EwW8ZkArL4",
    article: null,
    wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Crew-5",
  },
  upcoming: true,
  success: true,
  details: null,
  flight_number: 187,
  date_utc: futureDate,
  date_unix: +futureDate,
  id: "62dd70d5202306255024d139",
  name: "Future FalconSat",
};

export const FutureNext = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FutureNext.args = {
  launch: launchFutureNext,
};

const launchPastNext: Launch = {
  links: {
    youtube_id: "5EwW8ZkArL4",
    article: null,
    wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Crew-5",
  },
  upcoming: true,
  success: true,
  details: null,
  flight_number: 187,
  date_utc: pastDate,
  date_unix: +pastDate,
  id: "62dd70d5202306255024d139",
  name: "Incoming Past FalconSat",
};

export const PastNext = Template.bind({});
PastNext.args = {
  launch: launchPastNext,
};

const launchPrevious: Launch = {
  links: {
    youtube_id: "5EwW8ZkArL4",
    article: null,
    wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Crew-5",
  },
  upcoming: false,
  success: true,
  details: null,
  flight_number: 187,
  date_utc: pastDate,
  date_unix: +pastDate,
  id: "62dd70d5202306255024d139",
  name: "Previous FalconSat",
};

export const PreviousWithSuccess = Template.bind({});
PreviousWithSuccess.args = {
  launch: launchPrevious,
};

export const PreviousWithFailure = Template.bind({});
PreviousWithFailure.args = {
  launch: {...launchPrevious, success : false},
};
