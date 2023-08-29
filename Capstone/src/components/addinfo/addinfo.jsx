import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './addinfo.module.css';

const Addinfo = (props) => {
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
        <h1 className={styles.addkindergarten}>아이정보 등록하기</h1>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            className={styles.nameinput}
            placeholder="이름을 입력하세요"
            onChange={onChange}
            value={InputText}
          />
        </form>
      </section>
      <Footer />
    </>
  )
};

export default Addinfo;