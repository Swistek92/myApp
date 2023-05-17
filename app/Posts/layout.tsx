import React from "react";
import Header from "../../Components/Header/Header";
import { layoutProps } from "../layout";

const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <h1>naviagate top</h1>
      <div>{children}</div>
    </div>
  );
};

export default layout;
