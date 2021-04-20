import React from 'react';
import renderer from 'react-test-renderer';
import LoadingModal from '..';

it('should render Loading Modal correctly', () => {
  const tree = renderer.create(<LoadingModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
