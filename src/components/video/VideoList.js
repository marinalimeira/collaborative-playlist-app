import React from 'react';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }

  componentWillMount() {
    this.props.videoGetRequest()
      .done((data) => this.setState({ videos: data }));
  }

  renderiFrame(video) {
    return (
      <li className="video">
        <div className="sent-by">enviado por {video.user.name} {video.date}</div>
        <iframe height="100" src={video.url} />
     </li>
    )
  }

  render() {
    return(
      <div>
        <ul>
        {this.state.videos.map((video) => this.renderiFrame(video))}
      </ul>
    </div>
    )
  }
}

export default VideoList;
