import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Photographs.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const Snap = () => {
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

          <div className={styles.photographs}>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/01.jpg"
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/02.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/03.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/04.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/05.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/06.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/07.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/08.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/09.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/10.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/11.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/12.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/13.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/14.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/15.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/16.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/17.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/18.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/19.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/20.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/21.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/22.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/23.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/24.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/25.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/26.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.photograph}>
              <Image
                src="/assets/images/snap/27.jpg"
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

export default Snap;
