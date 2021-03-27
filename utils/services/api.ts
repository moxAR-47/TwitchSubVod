import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-Id': process.env.NEXT_PUBLIC_TWITCH_TOKEN,
  },
});

export default api;
