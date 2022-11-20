import ReactQueryWrappper from "./ReactQueryWrappper";
import Header from "../Components/Header/Header";

import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <ReactQueryWrappper>
        <body>
          <Header />
          <main className={styles.main}>{children}</main>
        </body>
      </ReactQueryWrappper>
    </html>
  );
}
