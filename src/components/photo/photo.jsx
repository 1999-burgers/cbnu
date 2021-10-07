import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './photo.module.css'

const Photo = (props) => {
  return (
    <>
      <Header />
      <content className={styles.content}>
        <div className={styles.img1}>
          <img className={styles.photo} src={require("../../images/photo/1.jpg").default} alt="사진" />
        </div>
        <div className={styles.img2}>
          <img className={styles.photo} src={require("../../images/photo/3.jpg").default} alt="사진" />
        </div>
      </content>
      {/* <button className={styles.right}>앞</button>
      <button className={styles.left}>뒤</button> */}
      <Footer />
    </>
  )
};
export default Photo;