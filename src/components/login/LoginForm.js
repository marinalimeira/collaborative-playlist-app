import React from 'react';
import TextField from '../common/TextField';

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
        <div className="row">
          <div className="col-md-12">
            <TextField value={this.state.email} onChange={this.onChange} field="email" label="E-mail" type="email"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <TextField value={this.state.password} onChange={this.onChange} field="password" label="Senha" type="password"/>
          </div>
        </div>

        <button type="submit" className="btn btn-info btn-fill pull-right">Entrar</button>
        <div className="clearfix"></div>
      </form>
    );
  }
}

export default LoginForm;
