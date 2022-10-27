import SignIn from "../components/Signin/Signin";
import Head from "next/head";
import Header from "../components/header";
import CenteredLayout from "../components/layout/centeredLayout";

export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
    },
  };
}

export default function signin({ locale }) {
  return (
    <>
      <Head>
        <title>Sign up - React playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenteredLayout>
        <h1>Sign up - React Playground</h1>
        <h2>{locale}</h2>
        <br />
        <SignIn />
      </CenteredLayout>
    </>
  );
}
