import React from "react";
import styles from "../styles/Footer.module.scss";
import Navigation from "./Navigation";

function Footer() {
  const { useState } = React;
  const [isShowNavigation, setIsShowNavigation] = useState(false);

  const showNavigation = () => {
    setIsShowNavigation(true)
  };

  return (
    <div className={styles.container}>
      <Navigation isShow={isShowNavigation} setIsShowNavigation={setIsShowNavigation}/>
      <div className={styles.openButton}>
        <button onClick={showNavigation}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
