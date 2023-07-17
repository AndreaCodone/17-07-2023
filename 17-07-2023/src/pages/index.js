import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import styles from "@/styles/Home.module.scss";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("api/hello", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`${styles.navbar}`}>
        <div className={`${styles.description}`}>
          <h1>CUCCHIAI PIEGATI</h1>
        </div>
        <Link className={`${styles.description}`} href="/about">
          {" "}
          {/* target="_blank" apre pagina in nuovo panello */}
          About
        </Link>
        <Link className={`${styles.description}`} href="/contacts">
          Contacts
        </Link>
        <Link className={`${styles.description}`} href="/products">
          Products
        </Link>
      </nav>

      <main className={`${styles.hero_image}`}>
        <div className={`${styles.main}`}>
          <div>
            <div className={`${styles.hero_text}`}>
              <h2>I'm Andrea</h2>
              <p>And I'm a Front-end Developer</p>
              <button className={`${styles.btn}`}>Hire me</button>
            </div>
          </div>
        </div>
      </main>

      <footer className={`${styles.footer}`}>
        <Footer />
      </footer>
    </>
  );
}
