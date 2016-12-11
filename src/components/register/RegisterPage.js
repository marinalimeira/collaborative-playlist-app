import React from 'react';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router';

const RegisterPage = () => (
  <div className="content">
    <h1 /><h1 />
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Register</h4>
                    </div>

                    <div className="content">
                      <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default RegisterPage;
