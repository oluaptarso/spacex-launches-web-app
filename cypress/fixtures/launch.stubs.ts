import Launch from "@/interfaces/launch";

const day = 1000 * 60 * 60 * 24;

const date = new Date();

const futureDate = new Date(+date + (day * 5)); 
const pastDate = new Date(+date - (day * 5));

export const upcomingLaunchWithFutureDate: Launch = {
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

export const upcomingLaunchWithPastDate: Launch = {
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

export const successfulPreviousLaunch: Launch = {
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

export const failedPreviousLaunch: Launch = {...successfulPreviousLaunch, success : false}