import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Map from '../map/map';
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import styles from './kindergarten.module.css'
import { useState } from 'react';

const Kindergarten = (props) => {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  }
  return (
    <>
      <Header />
      <section className={styles.section}>
        <h1 className={styles.addkindergarten}>어린이집 등록하기</h1>
        <Map searchPlace={Place} handleSubmit={handleSubmit} onChange={onChange} InputText={InputText} />
      </section>
      <Footer />

    </>
  )
};
export default Kindergarten;