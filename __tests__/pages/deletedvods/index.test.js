import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DeletedVods from '@/pages/deletedvods';

afterEach(cleanup);

test('should render Deleted Vods correctly', async () => {
  const { container } = render(<DeletedVods />);
  expect(container).toMatchSnapshot();
});
