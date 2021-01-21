import React from 'react';
import InfoModal from '../InfoModal';

import { Container } from './styles';

const QualitySelection = ({ ...rest }): any => {
  return (
    <Container>
      <label htmlFor="quality">Select a quality: </label>
      <select
        name="quality"
        id="quality"
        // onChange={(event) => setVodQuality(event.target.value)}
        {...rest}
      >
        <option defaultValue="chunked">Source</option>
        <option value="720p60">720p60</option>
        <option value="720p30">720p30</option>
        <option value="480p30">480p</option>
        <option value="360p30">360p</option>
        <option value="160p30">160p</option>
        <option value="audio_only">audio</option>
      </select>
      <InfoModal text={'Works best with "Source"'} />
    </Container>
  );
};

export default QualitySelection;
