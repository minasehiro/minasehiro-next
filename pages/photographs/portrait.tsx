import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../../styles/Photograph.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Portrait: NextPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.container}>
        <Head>
          <title>水瀬ひろ</title>
          <meta name="description" content="水瀬ひろのポートフォリオサイト" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header />
  
          <div className={styles.homeImage}>
            <Image src="/assets/images/photograph.jpg" layout="fill" objectFit="contain" />
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}

export default Portrait
