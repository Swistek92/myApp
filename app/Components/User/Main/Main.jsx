import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../../Buttons/Button";
import logout from "../../../../utils/Authentications/Logout";
import Image from "next/image";
import Link from "next/link";
const Main = ({ session }) => {
  const user = session.user;
  console.log(user);
  return (
    <div>
      <div>
        <p> name {user.name}</p>
        <p> email {user.email}</p>
        {user.role && <p> role {user.role}</p>}
        {user.image && (
          <Image alt='user' src={user.image} width={100} height={100} />
        )}
        {user.role === "admin" && (
          <Link target='_blank' href='/studio'>
            <Button>Studio</Button>
          </Link>
        )}

        <Button type={"logout"} onClick={() => logout()}>
          logout
        </Button>
      </div>
    </div>
  );
};

export default Main;
