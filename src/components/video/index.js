import React from 'react';

class Video extends React.Component {
  render() {
    return (
      <video src={this.props.video} width="384" height="682" controls />
    );
  }
}

export default Video;