import { Footer } from './Footer';
import { fireEvent, render } from '@testing-library/react-native';

describe('Footer', () => {
  it('Should render the buttons', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Mars')).toBeTruthy();
    expect(getByText('Spacecrafts')).toBeTruthy();
    expect(getByText('Menu')).toBeTruthy();
  });
});
