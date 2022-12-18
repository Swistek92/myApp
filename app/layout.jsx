import "./mainStyles.css";

import Header from "./Components/Header/Header";
import styles from "./layout.module.css";
import Wrappers from "./Components/Wrappers/Wrappers";
import { unstable_getServerSession } from "next-auth";

export default async function RootLayout({ children, ...props }) {
  const session = await unstable_getServerSession();
  console.log(session);
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
