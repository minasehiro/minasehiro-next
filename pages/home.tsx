import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
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
            <Image src="/assets/images/home.jpg" layout="fill" objectFit="contain" priority={true} />
          </div>

          <div className={styles.apps}>
            <Link href="/photographs/nature" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image src="/assets/images/nature_icon.jpg" layout="fill" objectFit="contain" />
                </div>
                Nature
              </a>
            </Link>
            <Link href="/photographs/portrait" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image src="/assets/images/portrait_icon.jpg" layout="fill" objectFit="contain" />
                </div>
                Portrait
              </a>
            </Link>
            <Link href="/photographs/snap" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image src="/assets/images/snap_icon.jpg" layout="fill" objectFit="contain" />
                </div>
                Snap
              </a>
            </Link>
            <Link href="/photographs/base_wishes" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image src="/assets/images/base_wishes_icon.jpg" layout="fill" objectFit="contain" />
                </div>
                Best wishes
              </a>
            </Link>
            <Link href="/photographs/profile" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image src="/assets/images/base_wishes_icon.jpg" layout="fill" objectFit="contain" />
                </div>
                Profile
              </a>
            </Link>
            <Link href="/photographs/app" scroll={false}>
              <a>
                <div className={styles.appIcon}>
                  <Image src="/assets/images/portrait_icon.jpg" layout="fill" objectFit="contain" />
                </div>
                App
              </a>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}

export default Home
