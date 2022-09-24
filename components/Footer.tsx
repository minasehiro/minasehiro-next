import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <Link href="/home">
        <div className={styles.homeButton}>
          <div className={styles.homeButtonSquare} />
        </div>
      </Link>
    </div>
  );
}

export default Footer;
