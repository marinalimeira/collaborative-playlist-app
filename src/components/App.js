import React from 'react';
import LoginPage from './login/LoginPage';
import VideoPage from './video/VideoPage';
import { Link } from 'react-router';

const App = () => (
  <div className="wrapper">
    <Link to="/login">Entrar</Link>
    <VideoPage />
  </div>
);

export default App;
