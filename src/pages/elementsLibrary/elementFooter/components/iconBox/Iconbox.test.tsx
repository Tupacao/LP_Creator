import { render, screen } from '@testing-library/react';
import IconBox from './IconBox';

describe('Iconbox', () => {
  test('Iconbox component should render correctly', () => {
    render(<IconBox />);

    expect(screen.getByTestId('icon-box')).toBeInTheDocument();
  });
});
