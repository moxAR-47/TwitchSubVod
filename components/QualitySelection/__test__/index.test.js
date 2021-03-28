import React from 'react';
import renderer from 'react-test-renderer';
import QualitySelection from '@/components/QualitySelection';

it('should render Quality Selection correctly', () => {
  const tree = renderer.create(<QualitySelection />).toJSON();
  expect(tree).toMatchSnapshot();
});
