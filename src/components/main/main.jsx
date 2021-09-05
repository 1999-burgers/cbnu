import React from 'react';
import styles from './main.module.css'
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';

const Main = ({ authService }) => {
  const history = useHistory();
  const onStart = (event) => {
    history.push('./login')
  }
  return (
    <BrowserRouter>
      <Switch>
        <section className={styles.main}>
          <img className={styles.logoimage} src={process.env.PUBLIC_URL + '../../images/logo.png'} alt="logo" />
          <h1 className={styles.logo}>내 아이 지키미</h1>
          <button className={styles.startbutton} onClick={onStart}>시작하기</button>
        </section>
      </Switch>
    </BrowserRouter >

  )
};
export default Main;