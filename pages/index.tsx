import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import User from "@/components/user";
import Guest from "@/components/guest";

export default function Home() {
  const [session, _setSession] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? <User /> : <Guest />}
    </div>
  );
}
