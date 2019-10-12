import React, { Component } from 'react';
import styled from 'styled-components';
import './VideoItem.scss';

class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { video, onVideoSelect, order } = this.props;
    const ItemContainer = styled.div`
      flex: 1 0 100%;
      margin-right: 20px;
      order: ${order};
    `;

    return (
      <ItemContainer className='videoItem' onClick={() => onVideoSelect(video)}>
        <img
          src={video.snippet.thumbnails.medium.url}
          className='videoItem__thumbnail'
          alt={video.snippet.title}
        />
        <div className='videoItem__infoContainer'>
          <div className='videoItem__info'>
            <div className='videoItem__title'>{video.snippet.title}</div>
          </div>
        </div>
      </ItemContainer>
    );
  }
}

export default VideoItem;
