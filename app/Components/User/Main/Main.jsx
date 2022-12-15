import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../../Buttons/Button";
import logout from "../../../../utils/Authentications/Logout";
const Main = ({ session }) => {
  const user = session.user;
  return (
    <div>
      <div>
        <p> name {user.name}</p>
        <p> email {user.email}</p>
        <p> role {user.role}</p>
        <Button type={"logout"} onClick={() => logout()}>
          logout
        </Button>
      </div>
    </div>
  );
};

export default Main;
