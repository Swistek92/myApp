import ReactQueryWrappper from "./ReactQueryWrappper";
import Header from "./Components/Header/Header";

import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <>
      <ReactQueryWrappper>
        <html lang='en'>
          <head />
          <body>
            <Header />
            <main className={styles.main}>{children}</main>
          </body>
        </html>
      </ReactQueryWrappper>
    </>
  );
}
