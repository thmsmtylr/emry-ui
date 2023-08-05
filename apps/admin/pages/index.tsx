import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "ui";
import "ui/styles/tailwind.css";

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emry UI: Admin</title>
        <meta name="description" content="Emry UI: Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Emry UI: Admin</h1>
        <Button label="button" onClick={() => console.log("click")} />
      </main>
    </>
  );
};

export default Admin;
