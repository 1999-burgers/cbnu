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
      <div className={styles.onLogin}>
        <button className={styles.loginbutton} onClick={onLogin}>Google</button>
      </div>

    </container>
  )
};
export default Login;