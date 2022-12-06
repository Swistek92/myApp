import React from "react";
import AuthUsers from "../../../utils/Authentications/AuthUsers";
import ChangePassword from "../../Components/User/ChangePassword/ChangePassword";
const page = ({ session, status }) => {
  return (
    <AuthUsers session={session} status={status}>
      <ChangePassword />
    </AuthUsers>
  );
};

export default page;
