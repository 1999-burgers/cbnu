import React from 'react';
import { useHistory } from 'react-router';
import styles from './platform.module.css'

const Platform = ({ authService }) => {
  const history = useHistory();
  const goTokindergarten = userID => {
    history.push({
      pathname: '/kindergarten',
      state: { id: userID },
    });
  };
  const onLogin = event => {
    authService
      .login(event.currentTarget.id)
      .then(data => goTokindergarten(data.user.uid))
  };
  return (
    <>
      <p className={styles.text}>
        간편하게 시작하기
      </p>
      <div className={styles.platform}>
        <button id='Google' className={styles.buttongoogle} onClick={onLogin}><i class="fab fa-google"></i></button>
        <button id='Facebook' className={styles.buttonfacebook} onClick={onLogin}><i class="fab fa-facebook-f"></i></button>
        {/* <button id='Twitter' className={styles.buttontwitter} onClick={onLogin}><i class="fab fa-twitter"></i></button> */}
        <button id='Google' className={styles.buttonemail} onClick={onLogin}><i class="fas fa-envelope"></i></button>
      </div>
    </>
  )
};
export default Platform;