import React, { Component } from 'react';
import { VideoItem } from 'components/primary';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './VideoList.scss';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  responsive = {
    0: { items: 1 },
    350: { items: 2 },
    768: { items: 3 },
    1024: { items: 6 }
  };

  render() {
    const { videos } = this.props;
    const items = videos.map((video, index) => (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={this.props.onVideoSelect}
      />
    ));
    const handleOnDragStart = e => e.preventDefault();

    return (
      <div className='videoList'>
        <AliceCarousel
          items={items}
          responsive={this.responsive}
          fadeOutAnimation={false}
          mouseDragEnabled={true}
          playButtonEnabled={false}
          buttonsDisabled={true}
          dotsDisabled={true}
          ref={el => (this.Carousel = el)}
        />
        <div class='videoList__prev' onClick={() => this.Carousel.slidePrev()}>
          <div class='arrow'></div>
        </div>
        <div class='videoList__next' onClick={() => this.Carousel.slideNext()}>
          <div class='arrow'></div>
        </div>
      </div>
    );
  }
}

export default VideoList;
