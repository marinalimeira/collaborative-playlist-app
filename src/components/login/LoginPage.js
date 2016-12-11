import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router';

const LoginPage = () => (
  <div>
    <LoginForm />
    <Link to="/register">Ainda não possui conta? Cadastre-se aqui!</Link>
  </div>
)

export default LoginPage;
