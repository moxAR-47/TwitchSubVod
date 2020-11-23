import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-Id': process.env.REACT_APP_TWITCH_TOKEN,
  },
});

export default api;
