import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const User = ({ session }) => {
  const user = session.user;
  return (
    <div>
      <div>
        <p> name {user.name}</p>
        <p> email {user.email}</p>
        <p> role {user.role}</p>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    </div>
  );
};

export default User;
