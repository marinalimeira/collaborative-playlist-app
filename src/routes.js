import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';
import App from './components/App';

export default (
  <div>
    <Route path="/" component={App}>
    </Route>

    <Route path="register" component={RegisterForm} />
  </div>
);
