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
      <div className={styles.button}>
        <button className={styles.left}>
          <i class="fas fa-arrow-alt-circle-left"></i>
        </button>
        <button className={styles.right}>
          <i class="fas fa-arrow-alt-circle-right"></i>
        </button>
      </div>
      <Footer />
    </>
  )
};
export default Photo;