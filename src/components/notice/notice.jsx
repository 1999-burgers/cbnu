import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './notice.module.css'

const Notice = (props) => {
  return (
    <>
      <Header />
      <section className={styles.content}>
        <h1>공쥐사항 </h1>
      </section>

      <Footer />
    </>
  )
};

export default Notice;