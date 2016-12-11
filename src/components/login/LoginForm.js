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
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" value={this.state.email} name="email" onChange={this.onChange} className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" value={this.state.password} name="password" onChange={this.onChange} className="form-control" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-info btn-fill pull-right">Entrar</button>
        <div className="clearfix"></div>
      </form>
    );
  }
}

export default LoginForm;
