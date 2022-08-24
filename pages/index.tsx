import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import UseRefExample from "../components/UseRefExample";
import UseRefExample2 from "../components/UseRefExample2";
import UseRefExample3 from "../components/UseRefExample3";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hooks</title>
        <meta name="description" content="Example project with react hooks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          React{" "}
          <a target="_blank" href="https://nextjs.org">
            Aditional Hooks
          </a>
        </h1>
        <div className={styles.grid}>
          <Link href="/userefpage">
            <a className="text-2xl p-5 underline text-blue-400 cursor-pointer">
              useRef Page
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
