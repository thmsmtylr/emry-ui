import type { NextPage } from "next";
import Head from "next/head";
// import { Button } from "ui";
import "ui/styles/tailwind.css";

const Docs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emry UI: Docs</title>
        <meta name="description" content="Emry UI: Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Emry UI: Docs</h1>
        {/* <Button label="button" onClick={() => console.log("click")} /> */}
      </main>
    </>
  );
};

export default Docs;
