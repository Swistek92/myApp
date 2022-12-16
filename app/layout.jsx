import "./mainStyles.css";
import { unstable_getServerSession } from "next-auth";

import Header from "./Components/Header/Header";
import styles from "./layout.module.css";
import Wrappers from "./Components/Wrappers/Wrappers";

export default async function RootLayout({ children, ...props }) {
  const session = await unstable_getServerSession();

  if (session) {
    console.log(session);
    return <p>session is hire</p>;
  }
  return (
    <>
      <html lang='en'>
        <head />
        <body>
          <Wrappers>
            <Header />
            <main className={styles.main}>{children}</main>
          </Wrappers>
        </body>
      </html>
    </>
  );
}
