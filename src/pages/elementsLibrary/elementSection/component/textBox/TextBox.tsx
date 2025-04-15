import { Box } from '@mui/material';
import ButtonText from '../../../components/buttonText/ButtonText';
import DescriptionText from '../../../components/descriptionText/DescriptionText';
import TitleText from '../../../components/titleText/TitleText';

interface TextBoxProps {
  titleText: string;
  setTitleText: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  buttonText: string;
  setButtonText: (value: string) => void;
}

export default function TextBox({
  titleText,
  setTitleText,
  description,
  setDescription,
  buttonText,
  setButtonText,
}: TextBoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        border: '1px solid red',
        height: '200px',
        borderRadius: 2,
      }}
    >
      <TitleText
        titleText={titleText}
        setTitle={setTitleText}
        middle={true}
        width='250px'
      />
      <DescriptionText
        descriptionText={description}
        setDescription={setDescription}
        middle={true}
        width='250px'
      />
      <ButtonText
        hasIcon={false}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
    </Box>
  );
}
