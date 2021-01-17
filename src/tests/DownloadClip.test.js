import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

test('Should be able to search deleted clips', async () => {
  const { getByLabelText, getByPlaceholderText } = render(<App />);

  fireEvent.click(getByLabelText('DownloadClip'));

  act(() => {
    fireEvent.change(
      getByPlaceholderText('https://clips.twitch.tv/CarefulNiceJaguarRickroll'),
      {
        target: { value: 'https://clips.twitch.tv/CarefulNiceJaguarRickroll' },
      },
    );
  });

  fireEvent.click(getByLabelText('submit'));

  expect(
    getByPlaceholderText('https://clips.twitch.tv/CarefulNiceJaguarRickroll')
      .value,
  ).toBe('https://clips.twitch.tv/CarefulNiceJaguarRickroll');
});
