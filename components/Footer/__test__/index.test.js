import renderer from 'react-test-renderer';
import Footer from '..';

it('should render Footer correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
