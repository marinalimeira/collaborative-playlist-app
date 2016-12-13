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
        <h4 className="title">Cadastro</h4>

        <RegisterForm userRegisterRequest={userRegisterRequest} />
      </div>
    )
  }
};

RegisterPage.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
}

export default connect(null, { userRegisterRequest })(RegisterPage);
