import React from 'react';
import TextField from '../common/TextField';
import { browserHistory } from 'react-router';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    // map state to props?
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({ errors: {} });
    e.preventDefault();
    this.props.userRegisterRequest(this.state)
        .done((data) => browserHistory.push("/login"))
        .fail((error) => this.setState({ errors: JSON.parse(error.responseText) }));
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
            <TextField error={errors.name} value={this.state.name} onChange={this.onChange} field="name" label="Nome"/>
            <TextField error={errors.email} value={this.state.email} onChange={this.onChange}
                       field="email" label="E-mail" type="email"
            />
            <TextField error={errors.password} value={this.state.password} onChange={this.onChange}
                       field="password" label="Senha" type="password"
            />
            <TextField error={errors.password_confirmation} value={this.state.password_confirmation}
                       onChange={this.onChange} field="password_confirmation" label="Confirmação de senha" type="password"
            />

        <button type="submit" className="btn btn-info btn-fill pull-right">Registrar</button>
        <div className="clearfix"></div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
}

export default RegisterForm;
