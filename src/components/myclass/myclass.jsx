import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './myclass.module.css'
const Myclass = (props) => {
  return (
    <>
      <Header />
      <section className={styles.content}>
        <h1>우리반 이야기 </h1>
      </section>
      <Footer />
    </>
  )
};
export default Myclass;