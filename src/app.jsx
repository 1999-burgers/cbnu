import { div } from 'prelude-ls';
import Main from './components/main/main';
import styles from './app.module.css';
import Login from './components/login/login';
import Mychild from './components/mychild/mychild';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kindergarten from './components/kindergarten/kindergarten';
import Mealtable from './components/mealtable/mealtable';
import Notice from './components/notice/notice';
import Photo from './components/photo/photo';
import Myclass from './components/myclass/myclass';

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
          <Route path='/mychild'>
            <Mychild />
          </Route>
          <Route path='/mealtable'>
            <Mealtable />
          </Route>
          <Route path='/photo'>
            <Photo />
          </Route>
          <Route path='/myclass'>
            <Myclass />
          </Route>
          <Route path='/notice'>
            <Notice />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
