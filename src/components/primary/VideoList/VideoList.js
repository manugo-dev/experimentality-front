import React, { Component } from 'react';
import styled from 'styled-components';
import { VideoItem } from 'components/primary';
import { Swipeable } from 'react-swipeable';
import { throttle } from 'lodash';
import './VideoList.scss';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      direction: props.videos.length === 1 ? 'prev' : 'next',
      sliding: false
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const { videos } = this.props;
    const numItems = videos.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  nextSlide = () => {
    const { position } = this.state;
    const { videos } = this.props;
    const numItems = videos.length || 1;
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  };

  prevSlide = () => {
    const { position } = this.state;
    const { videos } = this.props;
    const numItems = videos.length;
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  };

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    });
    setTimeout(() => {
      this.setState({
        sliding: false
      });
    }, 50);
  };

  handleSwipe = throttle(
    isNext => {
      const { videos } = this.props;
      const numItems = videos.length || 1;

      if (isNext && numItems > 1) {
        this.nextSlide();
      } else if (numItems > 1) {
        this.prevSlide();
      }
    },
    500,
    { trailing: false }
  );

  render() {
    const { videos } = this.props;
    const VideoListContainer = styled.div`
      transition: ${props => (props.sliding ? 'none' : 'transform 1s ease')};
    `;

    return (
      <div>
        <Swipeable
          onSwipedLeft={() => this.handleSwipe(true)}
          onSwipedRight={() => this.handleSwipe()}
        >
          <VideoListContainer className='videoList'>
            {videos.map((video, index) => (
              <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={this.props.onVideoSelect}
                order={this.getOrder(index)}
              />
            ))}
            <div
              className='videoList__arrow videoList__arrow--left'
              onClick={this.prevSlide}
            >
              left
            </div>
            <div
              className='videoList__arrow videoList__arrow--right'
              onClick={this.nextSlide}
            >
              right
            </div>
          </VideoListContainer>
        </Swipeable>
      </div>
    );
  }
}

export default VideoList;
