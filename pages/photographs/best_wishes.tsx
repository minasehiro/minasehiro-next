import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Photographs.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const BestWishes = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <Head>
          <title>水瀬ひろ</title>
          <meta name="description" content="水瀬ひろのポートフォリオサイト" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header />

          <div className={styles.photographs}>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/01.jpg"
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/02.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/03.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/04.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/05.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/06.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/07.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/08.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/09.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/10.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/11.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/12.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/13.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/14.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/15.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/16.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/17.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/best_wishes/18.jpg"
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

export default BestWishes;
