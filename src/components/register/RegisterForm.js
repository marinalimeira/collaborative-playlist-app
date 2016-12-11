import React from 'react';
import classnames from 'classnames';

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
    // map state to props
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({ errors: {} });
    e.preventDefault();
    this.props.userRegisterRequest(this.state)
    .fail((error) => this.setState({ errors: JSON.parse(error.responseText) }));
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className={classnames("form-group", 'has-error': errors.name)}>
              <label htmlFor="name">Nome</label>
              <input type="text" value={this.state.name} name="name" onChange={this.onChange} className="form-control" />
              {errors.name}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className={classnames("form-group", 'has-error': errors.email)}>
              <label htmlFor="email">E-mail</label>
              <input type="email" value={this.state.email} name="email" onChange={this.onChange} className="form-control" />
              {errors.email}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className={classnames("form-group", 'has-error': errors.password)}>
              <label htmlFor="password">Senha</label>
              <input type="password" value={this.state.password} name="password" onChange={this.onChange} className="form-control" />
              {errors.password}
            </div>
          </div>

          <div className="col-md-6">
            <div className={classnames("form-group", 'has-error': errors.password_confirmation)}>
              <label htmlFor="password_confirmation">Confirmação de Senha</label>
              <input type="password" value={this.state.password_confirmation} name="password_confirmation" onChange={this.onChange} className="form-control" />
              {errors.password_confirmation}
            </div>
          </div>
        </div>

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
