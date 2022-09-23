import styles from "../styles/Navigation.module.scss";
import Link from "next/link";
import Image from "next/image";

function Navigation(props: { isShow: boolean; setIsShowNavigation: (arg0: boolean) => void; }) {
  if (props.isShow) {
    return (
      <div className={styles.container}>
        <div className={styles.navigations}>
          <Link href="/home" scroll={false}>
            <a>Home</a>
          </Link>
          <span />
          <Link href="/app" scroll={false}>
            <a>App</a>
          </Link>
          <Link href="/profile" scroll={false}>
            <a>Profile</a>
          </Link>
        </div>

        <div className={styles.sns}>
          <a href="https://instagram.com/minasehiro" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/instagram.png" layout="fill" objectFit="contain" />
          </a>
          <a href="https://twitter.com/minase_hiro_" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/twitter.png" layout="fill" objectFit="contain" />
          </a>
        </div>

        <div className={styles.closeButton}>
          <button onClick={() => props.setIsShowNavigation(false)}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Navigation;
