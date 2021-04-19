import React from 'react';
import renderer from 'react-test-renderer';
import DownloadClips from '..';

it('should render Download Clips correctly', () => {
  const tree = renderer.create(<DownloadClips />).toJSON();
  expect(tree).toMatchSnapshot();
});
