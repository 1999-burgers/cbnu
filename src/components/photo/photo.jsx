import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './photo.module.css'
import Modal from 'react-modal'
const Photo = (props) => {
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const onClick1 = () => {
    setModalIsOpen1(true)
  }
  const onClick2 = () => {
    setModalIsOpen2(true)
  }
  return (
    <>
      <Header />
      <content className={styles.content}>
        <Modal className={styles.modal} isOpen={modalIsOpen1} onRequestClose={() => setModalIsOpen1(false)}>
          <img className={styles.modalphoto} src={require("../../images/photo/1/2.png").default} alt="사진" />
          <img className={styles.modalphoto} src={require("../../images/photo/1/3.png").default} alt="사진" />
          <img className={styles.modalphoto} src={require("../../images/photo/1/4.png").default} alt="사진" />
          <img className={styles.modalphoto} src={require("../../images/photo/1/5.png").default} alt="사진" />
        </Modal >
        <div className={styles.img1}>
          <img className={styles.photo} src={require("../../images/photo/1/1.png").default} alt="사진" onClick={onClick1} />
        </div>
        <Modal className={styles.modal} isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)}>
          <img className={styles.modalphoto} src={require("../../images/photo/2/1.png").default} alt="사진" />
          <img className={styles.modalphoto} src={require("../../images/photo/2/2.png").default} alt="사진" />
          <img className={styles.modalphoto} src={require("../../images/photo/2/3.png").default} alt="사진" />
          <img className={styles.modalphoto} src={require("../../images/photo/2/4.png").default} alt="사진" />
        </Modal >
        <div className={styles.img2}>
          <img className={styles.photo} src={require("../../images/photo/2/3.png").default} alt="사진" onClick={onClick2} />
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