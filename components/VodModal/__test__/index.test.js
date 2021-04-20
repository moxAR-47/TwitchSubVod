import React from 'react';
import renderer from 'react-test-renderer';
import VodModal from '..';

it('should render Vod Modal correctly', () => {
  const tree = renderer
    .create(<VodModal videoUrl="https://www.youtube.com/watch?v=d1YBv2mWll0" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
