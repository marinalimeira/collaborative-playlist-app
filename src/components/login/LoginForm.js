import React from 'react';
import TextField from '../common/TextField';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userLoginRequest(this.state)
        .fail((error) => this.setState({ errors: JSON.parse(error.responseText) }))
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        {error}

            <TextField value={this.state.email} onChange={this.onChange} field="email" label="E-mail" type="email"/>

            <TextField value={this.state.password} onChange={this.onChange} field="password" label="Senha" type="password"/>

        <button type="submit" className="btn btn-info btn-fill pull-right">Entrar</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired,
}

export default LoginForm;
