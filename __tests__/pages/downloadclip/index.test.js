import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DownloadClips from '@/pages/downloadclip';

afterEach(cleanup);

test('should render Download Clips correctly', async () => {
  const { container } = render(<DownloadClips />);
  expect(container).toMatchSnapshot();
});
