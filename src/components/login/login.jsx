import React from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css'


const Login = ({ authService }) => {
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
  }

  return (
    <container className={styles.image}>
      <button className={styles.onlogin} onClick={onLogin}>
        Google
      </button>
    </container>
  )
};
export default Login;