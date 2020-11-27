import React from 'react';

import { Container, Image } from './styles';

interface ResultProps {
  _id: string;
  animated_preview_url: string;
  preview: {
    large: string;
  };
  broadcast_id: number;
  title: string;
  views: number;
  url: string;
}
const VodGallery = ({ data }: any) => {
  return (
    <Container>
      {data.map((result: ResultProps) => {
        const formatNumber = (num: number) => {
          if (num > 1000 && num < 1000000) {
            return (num / 1000).toString().slice(0, 3) + 'K';
          } else if (num > 1000000) {
            return (num / 1000000).toString().slice(0, 3) + 'M';
          } else {
            return num;
          }
        };

        const splitString = result.preview.large.split('/')[5];

        let dataUrl = `https://twitch-cors.herokuapp.com/https://vod-secure.twitch.tv/${splitString}/chunked/index-dvr.m3u8`;

        return (
          <div key={result._id}>
            <a
              href={result.broadcast_id !== 1 ? dataUrl : result.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  url={result.preview.large}
                  animated={result.animated_preview_url}
                />
              </div>
              <strong>{result.title}</strong>
              <p>Views: {formatNumber(result.views)}</p>
            </a>
          </div>
        );
      })}
    </Container>
  );
};

export default VodGallery;

// {_id: "v814581553"
// ​​​// animated_preview_url: "https://d2nvs31859zcd8.cloudfront.net/472cae4a945ba4c9a63f_f…lie_40670608750_1606255451/storyboards/814581553-strip-0.jpg"
// ​​​// broadcast_id: 40670608750
// ​​​// broadcast_type: "archive"
// ​​​// channel: Object { mature: false, status: "(NO SPOILERS) among us!!!! :D", broadcaster_language: "en", … }
// ​​​// created_at: "2020-11-24T22:04:20Z"
// ​​​// delete_at: "2021-01-23T22:04:20Z"
// ​​​// description: null
// ​​​// description_html: null
// ​​​// fps: Object { 160p30: 29.995096490466462, 360p30: 29.995096490466462, 480p30: 29.995096490466462, … }
// ​​​// game: "Just Chatting"
// ​​​// increment_view_count_url: "https://countess.twitch.tv/ping.gif?u=%7B%22id%22%3A%22814581553%22%2C%22type%22%3A%22vod%22%7D"
// ​​​// language: "en"
// ​​​// length: 10527
// ​​​// preview: Object { small: "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/472cae4a…c9a63f_fuslie_40670608750_1606255451//thumb/thumb0-80x45.jpg", medium: "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/472cae4a…a63f_fuslie_40670608750_1606255451//thumb/thumb0-320x180.jpg", large: "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/472cae4a…a63f_fuslie_40670608750_1606255451//thumb/thumb0-640x360.jpg", … }
// ​​​// published_at: "2020-11-24T22:04:20Z"
// ​​​// recorded_at: "2020-11-24T22:04:20Z"
// ​​​// resolutions: Object { 160p30: "284x160", 360p30: "640x360", 480p30: "852x480", … }
// ​​​// restriction: ""
// ​​​// seek_previews_url: "https://d2nvs31859zcd8.cloudfront.net/472cae4a945ba4c9a63f_fuslie_40670608750_1606255451/storyboards/814581553-info.json"
// ​​​// status: "recorded"
// ​​​// tag_list: ""
// ​​​// thumbnails: Object { small: (8) […], medium: (8) […], large: (8) […], … }
// ​​​// title: "short minecraft stream!! first day on the new server!!! "
// ​​​// url: "https://www.twitch.tv/videos/814581553"
// ​​​// viewable: "public"
// ​​​// viewable_at: null
// ​​​// views: 115820}
