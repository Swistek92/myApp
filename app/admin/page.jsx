"use client";

import React from "react";
import { useSession } from "next-auth/react";
import AdminPage from "./AdminPage";
import AuthUsers from "../../utils/Authentications/AuthUsers";
const page = () => {
  const { data: session, status } = useSession();

  return (
    <AuthUsers session={session} status={status} forAdmin={true}>
      <AdminPage />
    </AuthUsers>
  );

  // if (auth === "loading") {
  //   return (
  //     <div>
  //       <h1>wait *_* </h1>
  //     </div>
  //   );
  // } else if (auth) {
  //   return (
  //     <div>
  //       <AdminPage />
  //     </div>
  //   );
  // } else {
  //   return <p>*__*</p>;
  // }
};

export default page;

// import { use } from "react";
// import { unstable_getServerSession } from "next-auth/next";
// export default function Page(props) {
//   // console.log({ props }); // { props: { params: {}, searchParams: {} } }

//   const session = use(unstable_getServerSession()); //TS2345: Argument of type '[]' is not assignable to parameter of type '[IncomingMessage & { cookies: Partial<{ [key: string]: string; }>; }, ServerResponse<IncomingMessage>, NextAuthOptions] | [...]'.   Type '[]' is not assignable to type '[NextApiRequest, NextApiResponse<any>, NextAuthOptions]'.     Source has 0 element(s) but target requires 3.

//   console.log(session);

//   if (!session) {
//     // window.location.href = "/";
//   }

//   return (
//     <>
//       <h1>Hi</h1>
//     </>
//   );
// }
