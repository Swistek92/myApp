import styles from "./layout.module.css";
import Menu from "../Components/User/Menu/Menu";
export default function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.row1}>
        <Menu />
      </div>
      <div className={styles.children}>{children}</div>
    </main>
  );
}
