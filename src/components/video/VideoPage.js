import React from 'react';
import VideoForm from './VideoForm';
import VideoList from './VideoList';
import { videoCreateRequest } from '../../actions/video';

class VideoPage extends React.Component {
 
  render () {
    return (
      <div>
        <VideoForm videoCreateRequest={videoCreateRequest} />
        <VideoList />
      </div>
    )
  }
}

export default VideoPage;
