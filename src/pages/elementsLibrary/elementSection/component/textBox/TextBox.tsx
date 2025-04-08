import { Box } from '@mui/material';
import ButtonText from '../../../components/buttonText/ButtonText';
import DescriptionText from '../../../components/descriptionText/DescriptionText';
import TitleText from '../../../components/titleText/TitleText';

export default function TextBox() {
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
      <TitleText titleText='Lorem, ipsum dolor.' />
      <DescriptionText descriptionText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,' />
      <ButtonText hasIcon={false} />
    </Box>
  );
}
