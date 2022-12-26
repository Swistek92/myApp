import "./mainStyles.css";

import Header from "./Components/Header/Header";
import styles from "./layout.module.css";
import Wrappers from "./Components/Wrappers/Wrappers";
import NextAuth from "pages/api/auth/[...nextauth]";

export default async function RootLayout({ children, ...props }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Wrappers>
          <Header />
          <main className={styles.main}>{children}</main>
        </Wrappers>
      </body>
    </html>
  );
}
