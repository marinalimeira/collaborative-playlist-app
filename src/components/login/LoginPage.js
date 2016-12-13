import React from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/user';

class LoginPage extends React.Component {
  render(){
  const { userLoginRequest } = this.props;
  return (
    <div className="wrapper center">
      <h1 /><h1 />
      <h2 className="title">LOGIN</h2>

      <LoginForm userLoginRequest={userLoginRequest} /><br />
      <Link to="/register">Ainda não possui conta? Cadastre-se aqui!</Link>
  </div>
)}}

LoginPage.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired,
}

export default connect(null, { userLoginRequest })(LoginPage);
