import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/App.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className={styles.container}>
        <Head>
          <title>水瀬ひろ</title>
          <meta name="description" content="水瀬ひろのポートフォリオサイト" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header />

          <div className={styles.homeImage}>
            <Image
              src="/assets/images/app.jpg"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

export default App;
