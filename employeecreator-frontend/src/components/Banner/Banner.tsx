import React from "react";
import styles from "./Banner.module.scss";
import logo from "../../assets/icon.png";
const Banner = () => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.container__logo} src={logo} alt="company logo" />
        <h1 className={styles.container__title}>Employee MS</h1>
      </div>
    </div>
  );
};

export default Banner;
