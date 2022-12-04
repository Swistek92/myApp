"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import AuthUsers from "utils/Authentications/AuthUsers";
import User from "./User";
export default function Login() {
  const { data: session, status } = useSession();
  return (
    <AuthUsers session={session} status={status}>
      <User session={session} />
    </AuthUsers>
  );
}
