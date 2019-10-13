import React, { Component } from 'react';
import { MainLayout } from 'components/layout';
import { VideoList, VideoDisplay } from 'components/primary';
import { YoutubeAPI } from 'services';
import './Landing.scss';

const MAX_VIDEOS = 6;
const API_KEY = 'AIzaSyAM1B0tbFPeVQ52_I77_bH7luhskWmcP6E';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null, userDoSearch: false };
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
      videos: response.data.items,
      userDoSearch: false
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
      videos: response.data.items,
      userDoSearch: true
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <MainLayout handleSearch={this.handleSearch}>
        <div className='landing'>
          <div className='landing__videoList' aria-label='Video playlist'>
            {!this.state.userDoSearch ? (
              <h2>Recommmended videos</h2>
            ) : (
              <h2>Search results</h2>
            )}
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
              userDoSearch={this.state.userDoSearch}
            />
          </div>
          <div
            className='landing__videoDisplay'
            aria-label='Video player with info'
          >
            <VideoDisplay video={this.state.selectedVideo} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Landing;
