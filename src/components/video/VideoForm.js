import React from 'react';
import TextField from '../common/TextField';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  } 

  onSubmit(e) {
    e.preventDefault();
    this.props.videoCreateRequest(this.state)
      .done((a) => (console.log(a)));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <TextField value={this.state.url}
                          onChange={this.onChange} field="url" label="Url"
              />
              <button type="submit" className="btn btn-info btn-fill pull-right">Enviar</button>
            </div>
          </div>
        </div>
      </form>      
    );
  }
}

export default VideoForm;
