import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mychild.module.css'
const Mychild = (props) => {
  return (
    <section>
      <Header />
      <ul className={styles.content}>
        <ul className={styles.child}>
          <img className={styles.childphoto} src={require("../../images/child1.png").default} alt="사진" />
          <div className={styles.childclass}>가람미술학원 피카소반 황보경</div>
        </ul>
        <ul className={styles.childinfo}>
          <li className={styles.tag}>승하차 태그</li>
          <li className={styles.tag}>밥먹음 ? </li>
        </ul>
      </ul>
      <Footer />
    </section>
  )
};
export default Mychild;