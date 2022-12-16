import { unstable_getServerSession } from "next-auth/next";

export default async function Page() {
  const session = await unstable_getServerSession();
  console.log(session, " server serv");
  return <p>serv</p>;
}
