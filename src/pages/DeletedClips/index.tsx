import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';
import LinkBox from '../../components/LinkBox';

const DeletedClips: React.FC = () => {
  const [vodId, setVodId] = useState('');
  const [data, setData] = useState(['']);
  const [startingPointH, setStartingPointH] = useState('');
  const [startingPointM, setStartingPointM] = useState('');
  const [startingPointS, setStartingPointS] = useState('');
  const [endingPointH, setEndingPointH] = useState('');
  const [endingPointM, setEndingPointM] = useState('');
  const [endingPointS, setEndingPointS] = useState('');
  /* const [loading, setLoading] = useState(Number); */

  const hmsToSeconds = (h: any, m: any, s: any) => {
    return +h * 3600 + +m * 60 + +s;
  };

  const handleSubmit = async () => {
    try {
      const startingSeconds = hmsToSeconds(
        startingPointH,
        startingPointM,
        startingPointS,
      );
      const endingSeconds = hmsToSeconds(
        endingPointH,
        endingPointM,
        endingPointS,
      );

      console.log(endingSeconds - startingSeconds);

      if (vodId.length === 11 && endingSeconds - startingSeconds <= 300) {
        for (let i = startingSeconds; i < endingSeconds; i++) {
          // there must be a lighter way to do this (instead of looping through every second)
          let url = `https://twitch-cors.herokuapp.com/https://clips-media-assets2.twitch.tv/${vodId}-offset-${i}.mp4`;
          axios
            .head(`${url}`)
            .then(() => {
              setData((data) => [
                ...data,
                `https://clips-media-assets2.twitch.tv/${vodId}-offset-${i}.mp4`,
              ]);
            })
            .catch(() => {
              return;
            });
        }
      } else {
        throw new Error(
          'Search time is longer than 5 minutes or Vod Id is Invalid',
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1>Deleted Twitch Clips</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="vodId"
          onChange={(event) => setVodId(event.target.value)}
          value={vodId}
          placeholder="Vod ID"
        />
        <div className="time-container">
          <div className="starting-time">
            <input
              type="number"
              name="Starting Point H"
              onChange={(event) => setStartingPointH(event.target.value)}
              value={startingPointH}
              placeholder="h"
              min="0"
            />
            <input
              type="number"
              name="Starting Point M"
              onChange={(event) => setStartingPointM(event.target.value)}
              value={startingPointM}
              placeholder="m"
              min="0"
              max="59"
            />

            <input
              type="number"
              name="Starting Point S"
              onChange={(event) => setStartingPointS(event.target.value)}
              value={startingPointS}
              placeholder="s"
              min="0"
              max="59"
            />
          </div>
          <p>to</p>
          <div className="ending-time">
            <input
              type="number"
              name="Ending Point H"
              onChange={(event) => setEndingPointH(event.target.value)}
              value={endingPointH}
              placeholder="h"
              min="0"
            />
            <input
              type="number"
              name="Ending Point M"
              onChange={(event) => setEndingPointM(event.target.value)}
              value={endingPointM}
              placeholder="m"
              min="0"
              max="59"
            />
            <input
              type="number"
              name="Ending Point S"
              onChange={(event) => setEndingPointS(event.target.value)}
              value={endingPointS}
              placeholder="s"
              min="0"
              max="59"
            />
          </div>
        </div>
        {}
        <button type="submit" onClick={handleSubmit}>
          <FiSearch size={14} />
          Search
        </button>
      </form>

      {/* {loading >= 1 && loading <= 99 &&   <p>{loading}%</p>} */}

      <LinkBox home />

      {data && (
        <>
          {console.log(data)}
          {data.map((item) => (
            <div className="video-container" key={item}>
              <ReactPlayer
                key={item}
                url={item}
                controls
                width="100%"
                height="100%"
              />
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default DeletedClips;
