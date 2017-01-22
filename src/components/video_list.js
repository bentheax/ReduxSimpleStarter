import React from 'react';
import { Col } from 'react-bootstrap';
import VideoListItem from './video_list_item';
import './video_list.css';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      video={video}
      key={video.etag}
      onVideoSelect={props.onVideoSelect}
    />
  });

  return (
    <Col sm={4} className="VideoList">
      <ul className="list-group">
        {videoItems}
      </ul>
    </Col>
  )
}

export default VideoList;
