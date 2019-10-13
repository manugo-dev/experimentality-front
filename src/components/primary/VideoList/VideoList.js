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
    400: { items: 2 },
    768: { items: 3 },
    1024: { items: 6 }
  };

  decodeHTML = html => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(
      '<!doctype html><body>' + html,
      'text/html'
    );
    return dom.body.textContent;
  };

  render() {
    const { videos } = this.props;
    const items = videos.map((video, index) => {
      video.snippet.title = this.decodeHTML(video.snippet.title);
      video.snippet.description = this.decodeHTML(video.snippet.description);
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });

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
          aria-label='Playlist carrousel'
        />
        <div
          class='videoList__prev'
          onClick={() => this.Carousel.slidePrev()}
          aria-label='Next item on carrousel'
        >
          <div class='arrow'></div>
        </div>
        <div
          class='videoList__next'
          onClick={() => this.Carousel.slideNext()}
          aria-label='Prev item on carrousel'
        >
          <div class='arrow'></div>
        </div>
      </div>
    );
  }
}

export default VideoList;
