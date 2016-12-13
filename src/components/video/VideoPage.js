import React from 'react';
import VideoForm from './VideoForm';
import VideoList from './VideoList';
import { videoCreateRequest, videoGetRequest } from '../../actions/video';
import { connect } from 'react-redux';

class VideoPage extends React.Component {
  render () {
    return (
      <div>
        <div className="video-form center">
          <VideoForm videoCreateRequest={this.props.videoCreateRequest} />
        </div>
        <VideoList videoGetRequest={this.props.videoGetRequest} />
      </div>
    )
  }
}

export default connect(null, { videoCreateRequest, videoGetRequest })(VideoPage);
