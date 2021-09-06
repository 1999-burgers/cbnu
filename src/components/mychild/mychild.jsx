import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mychild.module.css'
const Mychild = (props) => {
  return (
    <section>
      <Header />
      <ul className={styles.content}>
        <li className={styles.child}><img className={styles.childphoto} src="../../images/child1.png" alt="사진" />새싹어린이집 노랑반 황보경</li>
        <li className={styles.tag}>승하차</li>
      </ul>
      <Footer />
    </section>
  )
};
export default Mychild;