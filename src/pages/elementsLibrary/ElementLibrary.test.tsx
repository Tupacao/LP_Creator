import { render } from '@testing-library/react';
import ElementLibrary from './ElementLibrary';

describe('ElementLibrary', () => {
  test('Should render ElementLibrary', () => {
    const { ElementSection, ElementHeader, ElementFooter } = ElementLibrary;

    const { container: sectionContainer } = render(ElementSection);
    const { container: headerContainer } = render(ElementHeader);
    const { container: footerContainer } = render(ElementFooter);

    expect(sectionContainer.firstChild).toBeInTheDocument();
    expect(headerContainer.firstChild).toBeInTheDocument();
    expect(footerContainer.firstChild).toBeInTheDocument();
  });
});
