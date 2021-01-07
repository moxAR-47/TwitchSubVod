import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

test('Should be able to search deleted clips', async () => {
  const { getByPlaceholderText, getByLabelText } = render(<App />);

  fireEvent.click(getByLabelText('DeletedVods'));

  fireEvent.change(getByPlaceholderText('Vod ID'), {
    target: { value: '41194530526' },
  });

  fireEvent.click(getByLabelText('submit'));

  expect(getByPlaceholderText('Vod ID').value).toBe('41194530526');
  expect(getByPlaceholderText('Vod ID').value).not.toBe('');
});
