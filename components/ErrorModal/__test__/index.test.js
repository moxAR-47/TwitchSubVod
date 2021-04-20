import renderer from 'react-test-renderer';
import ErrorModal from '@/components/ErrorModal';

it('should render Error Modal correctly', () => {
  const tree = renderer
    .create(<ErrorModal message="The user you just searched doesn't exist" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
