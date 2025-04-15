import { render } from '@testing-library/react';
import ElementLibrary from './ElementLibrary';

describe('ElementLibrary', () => {
  test('Should render ElementLibrary', () => {

    const elementMockContentProps = {
      titleText: '',
      setTitleText: jest.fn(),
      description: '',
      setDescription: jest.fn(),
      buttonText: '',
      setButtonText: jest.fn(),
      addressText: '',
      setAddressText: jest.fn(),
      copiright: '',
      setCopiright: jest.fn(),
      titleBox: [{}],
      setTitleBox: jest.fn()
    }

    const { ElementSection, ElementHeader, ElementFooter } = ElementLibrary(elementMockContentProps);

    const { container: sectionContainer } = render(ElementSection);
    const { container: headerContainer } = render(ElementHeader);
    const { container: footerContainer } = render(ElementFooter);

    expect(sectionContainer.firstChild).toBeInTheDocument();
    expect(headerContainer.firstChild).toBeInTheDocument();
    expect(footerContainer.firstChild).toBeInTheDocument();
  });
});
