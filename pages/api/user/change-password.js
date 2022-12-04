// import { getSession } from "next-auth/client";

// async function handler(req, res) {
//   if (req.method !== "PATCH") {
//     return;
//   }

//   const session = await getSession({ req: req });

//   if (!session) {
//     res.status(401).json({
//       message: "not authenticated",
//     });
//     return;
//   }
//   const userEmail = session.user.email;
//   const oldPassword = req.body.oldPassword;
//   const newPassword = req.body.newPassword;

//   console.log(session);
// }

// export default handler;
