import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import styles from './kindergarten.module.css'
import { useState } from 'react';

const Kindergarten = (props) => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <h1 className={styles.addkindergarten}>어린이집 등록하기</h1>
        <serchbox>지도넣을예정임</serchbox>
      </section>
      <Footer />

    </>
  )
};
export default Kindergarten;