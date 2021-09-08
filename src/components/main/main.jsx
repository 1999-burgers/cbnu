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
          <div className={styles.logo}>
            <div className={styles.icon}><i className="fas fa-shapes"></i></div>
            <h1 className={styles.logotext}>내 아이 지킴이</h1>
          </div>
          <div className={styles.maintext}>우리아이의 소중한 유년기를 위하여</div>
          <button className={styles.startbutton} onClick={onStart}>시작하기</button>
        </section>
      </Switch >
    </BrowserRouter >

  )
};
export default Main;