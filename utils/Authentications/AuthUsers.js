import { useRouter } from "next/navigation";
import React from "react";

const AuthUsers = ({ children, session, status, forAdmin }) => {
  const router = useRouter();
  if (status === "loading") {
    return <p>loading</p>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    return <p>*_*</p>;
  }
  if (forAdmin) {
    if (session.user.role !== "admin") {
      router.push("/");
      return <p>*_*</p>;
    }
  }

  return <>{children}</>;
};

export default AuthUsers;

// export default function AuthWrapper({ children }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }
