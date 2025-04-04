import { render, screen } from '@testing-library/react';
import MapBox from './MapBox';

describe('MapBox', () => {
  test('MapBox component should render correctly', () => {
    render(<MapBox width={200} height={200} />);

    expect(screen.getByTestId('map-box')).toBeInTheDocument();
  });
});
