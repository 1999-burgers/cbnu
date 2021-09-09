import React from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import styles from './platform.module.css'

const Auth = ({ authService }) => {
  const history = useHistory();
  const goTokindergarten = userID => {
    history.push({
      pathname: '/kindergarten',
      state: { id: userID },
    });
  };
  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goTokindergarten(data.user.uid))
  };
  return (
    <>
      <p className={styles.text}>
        간편하게 시작하기
      </p>
      <div className={styles.platform}>
        <button className={styles.buttongoogle} onClick={onLogin}><i class="fab fa-google"></i></button>
        <button className={styles.buttonfacebook} onClick={onLogin}><i class="fab fa-facebook-f"></i></button>
        <button className={styles.buttontwitter} onClick={onLogin}><i class="fab fa-twitter"></i></button>
        <button className={styles.buttonemail} onClick={onLogin}><i class="fas fa-envelope"></i></button>
      </div>
    </>
  )
};
export default Auth;