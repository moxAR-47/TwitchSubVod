import React from 'react';
import renderer from 'react-test-renderer';
import VodGallery from '..';
import data from './data.json';

it('should render Vod Gallery correctly', () => {
  const tree = renderer
    .create(<VodGallery data={data.videos} quality="chunked" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
