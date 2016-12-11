import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router';

const LoginPage = () => (
  <div className="content">
    <h1 /><h1 />
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Login</h4>
                    </div>

                    <div className="content">
                      <LoginForm />
                    </div>
                    <div className="text-center content">
                      <Link to="/register">Ainda não possui conta? Cadastre-se aqui!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default LoginPage;
