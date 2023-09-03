import type { NextPage } from "next";
import Head from "next/head";
// import { Button } from "ui";
import "ui/styles/tailwind.css";

const Web: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emry UI: Web</title>
        <meta name="description" content="Emry UI: Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Emry UI: Website</h1>
        {/* <Button label="button" onClick={() => console.log("click")} /> */}
      </main>
    </>
  );
};

export default Web;
