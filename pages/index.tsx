import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import HomeLaunchCards from "@/components/home-launch-cards/home-launch-cards";
import Launches from "@/components/launches/launches";
import { FetchType } from "@/hooks/useFetchLaunches";

export default function Home() {
  return (
    <>
      <Head>
        <title>SpaceX - Launches</title>
        <meta
          name="description"
          content="Follow the next and previous SpaceX launches provided by the unofficial SpaceX REST API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <HomeLaunchCards className={styles.cardsContainer}/>
        <main className={styles.listsContainer}>
          <Launches className={styles.list} fetchType={FetchType.Past}/>
          <Launches className={styles.list} fetchType={FetchType.Upcoming}/>
        </main>
      </div>
    </>
  );
}
