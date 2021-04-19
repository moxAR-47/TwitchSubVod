import React from 'react';
import renderer from 'react-test-renderer';
import DeletedClips from '..';

it('should render Deleted Clips correctly', () => {
  const tree = renderer.create(<DeletedClips />).toJSON();
  expect(tree).toMatchSnapshot();
});
