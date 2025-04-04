import { render } from '@testing-library/react';
import ImageBox from './ImageBox';

describe('ImageBox', () => {
  test('Should render ImageBox', () => {
    render(<ImageBox width={300} height={200} />);

    const imageBox = document.querySelector('img');

    expect(imageBox).toBeInTheDocument();
    expect(imageBox).toHaveAttribute(
      'src',
      'https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg',
    );
    expect(imageBox).toHaveAttribute('alt', 'Placeholder');
  });
});
