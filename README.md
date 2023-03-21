# SpaceX - Launches Web Application
This is a Next.js web application bootstrapped with create-next-app, and is a part of [SpaceX - Launches](https://github.com/oluaptarso/spacex-launches).

## Tech
- [React.js](https://reactjs.org) on [Next.js](https://nextjs.org) (TypeScript);
- [Tailwind CSS](https://tailwindcss.com);
- [React Icons](https://react-icons.github.io/react-icons);

## Requirements
- Node.js - 16.18.1;
- npm - 8.19.2.
- [API](https://github.com/oluaptarso/spacex-launches-api) running;

## Getting Started

First, install the dependencies:
```bash
npm install
# or
yarn
```

Then, create the .env file:
```bash
cp .env.sample .env
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run with docker

First, build the container:
```bash
docker build -t spacex-launches-webapp .
```

Then, run your container:
```bash
docker run -p 3000:3000 spacex-launches-webapp
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
