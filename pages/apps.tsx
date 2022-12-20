import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Apps.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Apps = () => {
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

        <Header />

        <main className={styles.main}>
          <div className={styles.appSection}>
            <div className={styles.appName}>
              スキンケア成分スキャナー
              <br />
              <span>化粧品成分のデータベースアプリ</span>
            </div>
            <div className={styles.appIcon}>
              <Image
                src="/assets/images/app/bitter.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <a
              href="https://instagram.com/minasehirohttps://apps.apple.com/us/app/%E3%82%B9%E3%82%AD%E3%83%B3%E3%82%B1%E3%82%A2%E6%88%90%E5%88%86%E3%82%B9%E3%82%AD%E3%83%A3%E3%83%8A%E3%83%BC/id1606313601"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/app/app_store_badge.png"
                layout="fill"
                objectFit="contain"
              />
            </a>
            <div className={styles.appDescription}>
              <p>
                スキンケア製品の成分欄を読み込むだけで
                <br />
                どんな成分が含まれているのか調べられます。
                <br />
                <br />
                自分の肌悩みに合った成分が入っているのか
                <br />
                どんな成分が含まれていて
                <br />
                それぞれどういった効果があるのか
                <br />
                <br />
                ぜひ調べてみてください！
              </p>
            </div>
            <div className={styles.appScreenShot}>
              <Image
                src="/assets/images/app/bitter_ss.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Apps;
