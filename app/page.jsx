import "./mainStyles.css";
import Header from "./Components/HomePage/Header/Header";
import Main from "./Components/HomePage/Main/Main";
import styles from "./page.module.css";
export default async function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}
