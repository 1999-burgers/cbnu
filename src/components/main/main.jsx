import React from 'react';
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';

const Main = ({ authService }) => {
  const history = useHistory();
  const onStart = (event) => {
    history.push('./login')
  }
  return (
    <BrowserRouter>
      <Switch>
        <section className='app'>
          <div>
            <image src='./common/main'>
              <h1 className='mainlogo'>내 아이 지키미</h1>
              <button className="startbutton" onClick={onStart}>시작하기</button>
            </image>
          </div>
        </section>
      </Switch>
    </BrowserRouter>

  )
};
export default Main;