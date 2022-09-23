import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Photographs.module.scss'
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

          <div className={styles.photographs}>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/01.jpg" layout="fill" objectFit="contain" priority={true} />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/02.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/03.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/04.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/05.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/06.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/07.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/08.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/09.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/10.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/11.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/12.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/13.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/14.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/15.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/16.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/17.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.photograph}>
              <Image src="/assets/images/portrait/18.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}

export default Portrait
