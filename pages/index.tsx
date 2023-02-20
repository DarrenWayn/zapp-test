import Head from "next/head";
import styles from "../styles/Home.module.css";
import User from "@/components/user";
import Guest from "@/components/guest";
import { useSession, getSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? <User session={session} /> : <Guest />}
    </div>
  );
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
