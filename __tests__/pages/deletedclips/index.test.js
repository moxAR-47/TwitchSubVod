import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DeletedClips from '@/pages/deletedclips';

afterEach(cleanup);

test('should render Deleted Clips correctly', async () => {
  const { container } = render(<DeletedClips />);
  expect(container).toMatchSnapshot();
});
