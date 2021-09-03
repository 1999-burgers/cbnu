import { div } from 'prelude-ls';
import Main from './components/main/main';
import styles from './app.module.css';
import Button from 'react-bootstrap/Button';
import Footer from './components/footer/footer'
import Login from './components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
