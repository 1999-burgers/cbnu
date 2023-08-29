import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import ChildRepository from './service/childinfo_repository';
import '@fortawesome/fontawesome-free/js/all.js';

const authService = new AuthService();
const childRepository = new ChildRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} childRepository={childRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);


