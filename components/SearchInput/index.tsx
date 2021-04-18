import React, { useRef, useState } from 'react';
import ReactGA from 'react-ga';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';
import api from '@/utils/services/api';
import { useGlobal } from '@/stores/GlobalContext';
import { Container } from './styles';
import QualitySelection from '../QualitySelection';
import ErrorModal from '../ErrorModal';
import LoadingModal from '../LoadingModal';

const SearchInput = (): any => {
  const router = useRouter();
  const inputRef = useRef<any>();
  const {
    setVideoQuality,
    error,
    setError,
    loading,
    setLoading,
    setVodUrl,
  } = useGlobal();
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (username) {
      setLoading(true);
      router.prefetch(`/videos/${username}`);
      try {
        setError('');
        api.get(`users?login=${username}`).then((response) => {
          try {
            api
              .get(`channels/${response.data.users[0]._id}/videos?limit=1`)
              .then((channelResponse: any) => {
                if (channelResponse.data.videos.length !== 0) {
                  router.push(`/videos/${username}`);
                  setLoading(false);
                  setVodUrl('');
                  inputRef.current?.blur();
                }
                if (channelResponse.data._total === 0) {
                  setLoading(false);
                  setError(`${username} does not have any available streams`);
                }
              });

            ReactGA.event({
              category: 'SearchedUserForDeletedVod',
              action: `${username}`,
            });
          } catch (err) {
            setLoading(false);
            setError('This user does not exist or is unavailable');
          }
        });
      } catch (err) {
        console.warn(err);
        setLoading(false);
        setError('Something went wrong');
      }
    } else {
      setError('Enter a streamer username');
    }
  };

  return (
    <Container
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        name="username"
        aria-label="username"
        onChange={(event) => setUsername(event.target.value)}
        value={username}
        placeholder="Streamer Username"
      />
      <QualitySelection
        onChange={(event: any) => setVideoQuality(event.target.value)}
      />
      <button type="submit" aria-label="submit">
        <FiSearch size={14} />
        Search
      </button>
      {loading && <LoadingModal />}
      {error && <ErrorModal message={error} />}
    </Container>
  );
};

export default SearchInput;
