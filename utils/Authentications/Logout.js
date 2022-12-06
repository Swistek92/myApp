import React from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { infoToast } from "../Toasts/Toast";
const Logout = () => {
  signOut();
  infoToast("logout!");
};

export default Logout;
