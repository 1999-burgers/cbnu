import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mealtable.module.css'

const Mealtable = (props) => {
  return (
    <>
      <Header />
      <content className={styles.content}>
        밥줘벅벅
      </content>
      <Footer />
    </>
  )
};
export default Mealtable;