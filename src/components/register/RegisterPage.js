import React from 'react';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../../actions/user';

class RegisterPage extends React.Component {
  render(){
    const { userRegisterRequest } = this.props;
    return (
      <div className="content">
        <h1 /><h1 />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Cadastro</h4>
                        </div>

                        <div className="content">
                          <RegisterForm userRegisterRequest={userRegisterRequest} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
};

RegisterPage.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
}

export default connect(null, { userRegisterRequest })(RegisterPage);
