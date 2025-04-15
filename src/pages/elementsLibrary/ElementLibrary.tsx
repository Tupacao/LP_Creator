import ElementFooter from './elementFooter/ElementFooter';
import ElementHeader from './elementHeader/ElementHeader';
import ElementSection from './elementSection/ElementSection';

interface ElementContentProps {
  titleText: string;
  setTitleText: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  buttonText: string;
  setButtonText: (value: string) => void;
}

const ElementLibrary = (props : ElementContentProps) => ({
  ElementHeader: ElementHeader(props),
  ElementFooter: ElementFooter(props),
  ElementSection: ElementSection(props)
});

export default ElementLibrary;
