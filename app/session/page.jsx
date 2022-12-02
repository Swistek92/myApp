"use client";

import { useSession, signIn, signOut } from "next-auth/react";
// import { useSession } from "../../utils/nextAuthReactQuery";

export default function Login() {
  const { data: session } = useSession();
  // const [data, session] = useSession();

  console.log(session);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return <p>hello</p>;
}
