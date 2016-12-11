import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
         type="text"
         value={this.state.email}
         name="email"
         onChange={this.onChange}
        />

        <label htmlFor="password">Senha</label>
        <input
         type="text"
         value={this.state.password}
         name="password"
         onChange={this.onChange}
        />

        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default LoginForm;
