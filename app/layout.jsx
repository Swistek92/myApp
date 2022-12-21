import "./mainStyles.css";

import Header from "./Components/Header/Header";
import styles from "./layout.module.css";
import Wrappers from "./Components/Wrappers/Wrappers";
import { unstable_getServerSession } from "next-auth";
import NextAuth from "pages/api/auth/[...nextauth]";

export default async function RootLayout({ children, ...props }) {
  let session = await unstable_getServerSession(NextAuth);

  return (
    <html lang='en'>
      <head />
      <body>
        <Wrappers session={session}>
          <Header session={session} />
          <main className={styles.main}>{children}</main>
        </Wrappers>
      </body>
    </html>
  );
}
