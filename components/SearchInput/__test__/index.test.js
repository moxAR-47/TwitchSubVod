import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from '@/components/SearchInput';

it('should render Search Input correctly', () => {
  const tree = renderer.create(<SearchInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
