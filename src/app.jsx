import Main from './components/main/main';
import styles from './app.module.css';
import Login from './components/login/login';
import Mychild from './components/mychild/mychild';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kindergarten from './components/kindergarten/kindergarten';
import Mealtable from './components/mealtable/mealtable';
import Notice from './components/notice/notice';
import Photo from './components/photo/photo';
import Join from './components/login/join';
import Addinfo from './components/addinfo/addinfo';


function App({ authService, childRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/login'>
            <Login authService={authService} childRepository={childRepository} />
          </Route>
          <Route path='/kindergarten'>
            <Kindergarten childRepository={childRepository} />
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
          <Route path='/notice'>
            <Notice />
          </Route>
          <Route path='/join'>
            <Join />
          </Route>
          <Route path='/addinfo'>
            <Addinfo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
