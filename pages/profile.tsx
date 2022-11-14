import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Profile.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Profile = () => {
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

          <div className={styles.pages}>
            <div className={styles.page}>
              <div className={styles.name}>水瀬ひろ</div>
              <div className={styles.info}>
                東京在住
                <br />
                webエンジニア
                <br />
                フォトグラファー
                <br />
                モバイルアプリエンジニア
              </div>
              <div className={styles.scrolldown}>
                <div className={styles.line} />
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                いいジャンプはいい<span>助走</span>から。
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                遠きに行くは必ず<span>邇き</span>よりす。
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                「自分より優れた何かを持っている人間は生まれた時点で自分とは違っている。それを覆すことなど、どんな努力、工夫、仲間をもってしても不可能だ」
                <br />
                <br />
                そう嘆くのは全ての<span>正しい努力</span>をしてからで遅くない。
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                好きなことをする<span>努力家</span>は最強なんですよ
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                限界を超えるんじゃなくて、<span>限界値</span>を上げていこう。
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                何かを始めるのに、揺るぎない意志とか崇高な動機なんてなくていい。スタートに必要なのは、<span>ちょこっとの好奇心</span>ぐらいだよ。
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                習慣は<span>第二の天性</span>なり
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                半年に1回くらいメンタルが限りなくマイナス寄りになった時に思う。自分は<span>平凡</span>なんだと。
                <br />
                <br />
                ところで平凡な俺よ、下を向いている暇はあるのか。
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                日本一にもなってへん俺らが去年を・昨日を守って明日何になれる？ 何かひとつでいい。<span>今日</span>挑戦しいや
              </div>
            </div>
            <div className={styles.page}>
              <div className={styles.word}>
                どこにも行けない奴が他人の挑戦を笑う。<span>「誰もやってない」</span>ことは<span>「誰もできない」</span>ことじゃない。
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Profile;
