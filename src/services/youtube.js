import axios from 'axios';
const KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';

axios.defaults.params = {
  part: 'id,snippet,player',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/'
});
