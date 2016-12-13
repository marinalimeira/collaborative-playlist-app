import React from 'react';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../../actions/user';

class RegisterPage extends React.Component {
  render(){
    const { userRegisterRequest } = this.props;
    return (
      <div className="wrapper center">
        <h1 /><h1 />
        <h2>CADASTRO</h2>

        <RegisterForm userRegisterRequest={userRegisterRequest} />
      </div>
    )
  }
};

RegisterPage.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
}

export default connect(null, { userRegisterRequest })(RegisterPage);
