import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Photographs.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

const Nature = () => {
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
                src="/assets/images/nature/01.jpg"
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/02.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/03.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/04.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/05.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/06.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/07.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/08.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/09.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/10.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/11.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/12.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/13.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/14.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/15.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/16.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/17.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/18.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/nature/19.jpg"
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

export default Nature;
