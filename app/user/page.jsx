"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import AuthUsers from "utils/Authentications/AuthUsers";
import Main from "../Components/User/Main/Main";
export default function Login() {
  const { data: session, status } = useSession();
  return (
    <AuthUsers session={session} status={status}>
      <Main session={session} status={status} />
    </AuthUsers>
  );
}
