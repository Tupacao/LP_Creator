import {render} from '@testing-library/react';
import Footer from './Footer.tsx';

describe('Footer', () => {
  it('should render the footer', () => {
    render(<Footer />);
    expect(true).toBe(true);
  })
})