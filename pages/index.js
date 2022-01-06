import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <h1>Home Page</h1>
      <Footer />
    </div>
  );
}
