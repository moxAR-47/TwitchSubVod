import React from 'react';
import renderer from 'react-test-renderer';
import Videos from '../[streamer]';

it('should render Videos correctly', () => {
  const tree = renderer.create(<Videos />).toJSON();
  expect(tree).toMatchSnapshot();
});
