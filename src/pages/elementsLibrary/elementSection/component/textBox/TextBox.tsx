import { Box } from '@mui/material';
import ButtonText from '../../../components/ButtonText';
import DescriptionText from '../../../components/DescriptionText';
import TittleText from '../../../components/TittleText';

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
      <TittleText titleText='Lorem, ipsum dolor.' />
      <DescriptionText descriptionText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,' />
      <ButtonText hasIcon={false} />
    </Box>
  );
}
