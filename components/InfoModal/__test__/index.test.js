import React from 'react';
import renderer from 'react-test-renderer';
import InfoModal from '..';

it('should render Info Modal correctly', () => {
  const tree = renderer.create(<InfoModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
