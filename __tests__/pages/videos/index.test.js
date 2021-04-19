import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Videos from '@/pages/videos/[streamer]';

afterEach(cleanup);

test('should render Videos correctly', async () => {
  const { container } = render(<Videos />);
  expect(container).toMatchSnapshot();
});
