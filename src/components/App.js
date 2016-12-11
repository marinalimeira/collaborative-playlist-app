import React from 'react';
import Sidebar from './Sidebar';
import LoginPage from './login/LoginPage';
import { Link } from 'react-router';

const App = () => (
  <div className="wrapper">
    <Sidebar />
    <div className="main-panel">
      <Link to="/register">Registro</Link> <br />
      <Link to="/login">Entrar</Link>
    </div>
  </div>
);

export default App;
