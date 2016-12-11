import React from 'react';
import $ from 'jquery';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    $.post('http://localhost:3000/api/v1/users', this.state)
      .done((a) => console.log("done", a))
      .fail((a) => console.log("fail", a));

    // send to enother file. utils/users
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="name">Nome</label>
        <input
         type="text"
         value={this.state.name}
         name="name"
         onChange={this.onChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
         type="email"
         value={this.state.email}
         name="email"
         onChange={this.onChange}
        />

        <label htmlFor="password">Senha</label>
        <input
         type="password"
         value={this.state.password}
         name="password"
         onChange={this.onChange}
        />

        <label htmlFor="password_confirmation">Confirmação de Senha</label>
        <input
         type="password"
         value={this.state.password_confirmation}
         name="password_confirmation"
         onChange={this.onChange}
        />

        <button type="submit">Registrar</button>
      </form>
    );
  }
}

export default RegisterPage;
