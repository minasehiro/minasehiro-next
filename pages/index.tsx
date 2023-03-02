import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.scss";
import { motion } from "framer-motion";

const Index = () => {
  const router = useRouter();

  if (router.pathname === "/") {
    useEffect(() => {
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    });
  }

  return (
    <motion.div
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
          <Image
            src="/assets/images/minasehiro_logo.png"
            layout="fill"
            objectFit="cover"
            objectPosition={"50% 50%"}
            priority={true}
            alt="ロゴ"
          />
        </main>
      </div>
    </motion.div>
  );
};

export default Index;
