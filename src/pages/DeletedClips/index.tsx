import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

import { FiLoader, FiSearch } from 'react-icons/fi';

import { Container, AnimationContainer } from './styles';
import LinkBox from '../../components/LinkBox';
import InfoModal from '../../components/InfoModal';

const DeletedClips: React.FC = () => {
  const [vodId, setVodId] = useState('');
  const [data, setData] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [startingPointH, setStartingPointH] = useState('');
  const [startingPointM, setStartingPointM] = useState('');
  const [startingPointS, setStartingPointS] = useState('');
  const [endingPointH, setEndingPointH] = useState('');
  const [endingPointM, setEndingPointM] = useState('');
  const [endingPointS, setEndingPointS] = useState('');

  const hmsToSeconds = (h: any, m: any, s: any) => {
    return +h * 3600 + +m * 60 + +s;
  };

  // little hack here
  // todo: find a way to check if any request is being processed
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }

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

      if (
        vodId.length === 11 &&
        endingSeconds - startingSeconds <= 300 &&
        endingSeconds - startingSeconds > 0
      ) {
        setLoading(true);
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
      alert(
        'Search time is longer than 5 minutes or Vod Id is Invalid or Search time is invalid',
      );
      console.warn(err);
    }
  };

  return (
    <Container>
      <AnimationContainer>
        <h1>Deleted Twitch Clips</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="input-box">
            <input
              type="number"
              name="vodId"
              onChange={(event) => setVodId(event.target.value)}
              value={vodId}
              placeholder="Vod ID"
            />
            <InfoModal />
          </div>
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

          <button type="submit" onClick={handleSubmit}>
            <FiSearch size={14} />
            Search
          </button>
        </form>

        <LinkBox home />

        {loading && (
          <span>
            <FiLoader size={32} />
          </span>
        )}

        {data && (
          <>
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
      </AnimationContainer>
    </Container>
  );
};

export default DeletedClips;
