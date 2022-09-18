import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.scss'

const Index: NextPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 7 * 1000);
  });

  return (
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.container}>
        <Head>
          <title>水瀬ひろ</title>
          <meta name="description" content="水瀬ひろのポートフォリオサイト" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Image
            src="/assets/gifs/minasehiro_logo.gif"
            layout="fill"
            objectFit={"contain"}
            objectPosition={"50% 50%"}
            alt="ロゴアニメーション"
          />
        </main>
      </div>
    </motion.div>
  )
}

export default Index
