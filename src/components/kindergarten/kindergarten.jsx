import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Map from '../map/map';
import styles from './kindergarten.module.css'
import { useState } from 'react';
import { useLocation } from "react-router-dom";

const Kindergarten = ({ childRepository }) => {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const location = useLocation();
  const childinfo = location.state.id
  // console.log(childinfo)

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
        <div className={styles.map}>
          <Map searchPlace={Place} handleSubmit={handleSubmit} onChange={onChange} InputText={InputText} childinfo={childinfo} childRepository={childRepository} />
        </div>
      </section>
      <Footer />

    </>
  )
};
export default Kindergarten;