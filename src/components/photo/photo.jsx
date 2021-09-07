import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './photo.module.css'

const Photo = (props) => {
  return (
    <>
      <Header />
      <content className={styles.content}>
        포토존
      </content>
      <Footer />
    </>
  )
};
export default Photo;