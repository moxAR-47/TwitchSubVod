import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

test('Should be able to search streamer', async () => {
  const { getByLabelText } = render(<App />);

  act(() => {
    fireEvent.change(getByLabelText('username'), {
      target: { value: 'xqcow' },
    });
  });
  fireEvent.click(getByLabelText('submit'));

  expect(getByLabelText('username').value).toBe('xqcow');
  expect(getByLabelText('username').value).not.toBe('forsen');
  expect(getByLabelText('username').value).not.toBe('');
});
