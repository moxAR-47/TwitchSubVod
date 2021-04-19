import React from 'react';
import renderer from 'react-test-renderer';
import DeletedVods from '..';

it('should render Deleted Vods correctly', () => {
  const tree = renderer.create(<DeletedVods />).toJSON();
  expect(tree).toMatchSnapshot();
});
