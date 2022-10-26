import SignUp from "../components/Signup/Signup";
import Head from "next/head";

import SignupLayout from "../components/layout/signupLayout";

export default function signup() {
  return (
    <>
      <Head>
        <title>Sign up - React playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupLayout>
        <h1>Sign up - React Playground</h1>
        <br />
        <SignUp />
      </SignupLayout>
    </>
  );
}