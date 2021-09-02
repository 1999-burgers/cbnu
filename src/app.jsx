import { div } from 'prelude-ls';
import Main from './components/main/main';
import styles from './app.module.css';
import Button from 'react-bootstrap/Button';
import Footer from './components/footer/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
