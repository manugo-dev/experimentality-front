import React, { Component } from 'react';
import { MainLayout } from 'components/layout';
import { VideoList, VideoDisplay } from 'components/primary';
import { YoutubeAPI } from 'services';
import './Landing.scss';

const MAX_VIDEOS = 6;
const API_KEY = 'AIzaSyDOxZ7q2PBA-eanC07IXACZ__VR9QfO_zw';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount() {
    this.getPopularVideos().then(() => {
      this.setState({ selectedVideo: this.state.videos[0] });
    });
  }

  getPopularVideos = async () => {
    const response = await YoutubeAPI.get('/search', {
      params: {
        part: 'snippet,id',
        maxResults: MAX_VIDEOS,
        order: 'viewcount',
        type: 'video',
        key: API_KEY
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  handleSearch = async searchValue => {
    const response = await YoutubeAPI.get('/search', {
      params: {
        q: searchValue,
        part: 'snippet,id',
        order: 'viewcount',
        maxResults: MAX_VIDEOS,
        type: 'video',
        key: API_KEY
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <MainLayout handleSearch={this.handleSearch}>
        <div className='landing'>
          <div className='landing_videoList'>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
          <div className='landing_videoDisplay'>
            <VideoDisplay video={this.state.selectedVideo} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Landing;
