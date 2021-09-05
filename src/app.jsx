import { div } from 'prelude-ls';
import Main from './components/main/main';
import styles from './app.module.css';
import Button from 'react-bootstrap/Button';
import Footer from './components/footer/footer'
import Login from './components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kindergarten from './components/kindergarten/kindergarten';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/login'>
            <Login authService={authService} />
          </Route>
          <Route path='/kindergarten'>
            <Kindergarten />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
