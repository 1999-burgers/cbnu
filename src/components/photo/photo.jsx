import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './photo.module.css'
import Modal from 'react-modal'
const Photo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onClick = () => {
    setModalIsOpen(true)
  }
  return (
    <>
      <Header />
      <content className={styles.content}>
        <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>모달테스트1
        </Modal >
        <div className={styles.img1}>
          <img className={styles.photo} src={require("../../images/photo/1/1.png").default} alt="사진" onClick={onClick} />
        </div>
        <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>모달테스트2
        </Modal >
        <div className={styles.img2}>
          <img className={styles.photo} src={require("../../images/photo/3.png").default} alt="사진" onClick={onClick} />
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