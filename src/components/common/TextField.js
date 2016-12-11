import React from 'react';
import classnames from 'classnames';

const TextField = ({ error, value, onChange, label, field, type }) => (
  <div className={classnames("form-group", 'has-error': error)}>
    <label htmlFor={field}>{label}</label>
    <input type={type} value={value} name={field} onChange={onChange} className="form-control" />
    {error}
  </div>
)

TextField.PropTypes = {
  field: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  field: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
}

TextField.defaultProps = {
  type: 'text',
}

export default TextField;
