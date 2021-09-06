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
            <i className="fas fa-shapes"></i>
            <h1 className={styles.logotext}>내 아이 지킴이</h1>
          </div>
          <button className={styles.startbutton} onClick={onStart}>시작하기</button>
        </section>
      </Switch >
    </BrowserRouter >

  )
};
export default Main;