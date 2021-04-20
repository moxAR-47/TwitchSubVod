import renderer from 'react-test-renderer';
import LinkBox from '..';

it('should render LinkBoxes correctly', () => {
  const tree = renderer
    .create(
      <>
        <LinkBox home />
        <LinkBox clips />
        <LinkBox vods />
        <LinkBox download />
        <LinkBox all />
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
