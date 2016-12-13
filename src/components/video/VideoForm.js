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
    this.props.videoCreateRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField value={this.state.url} classes="inline"
          onChange={this.onChange} field="url" label="Url"
        />
        <button type="submit">Enviar</button>
      </form>      
    );
  }
}

export default VideoForm;
