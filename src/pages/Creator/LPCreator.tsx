import { Box, Button, Typography } from '@mui/material';
import Footer from '../../shared/components/footer/Footer';
import Header from '../../shared/components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import SectionBox from './components/SectionBox';

export default function LPCreator() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          py: '10px',
          px: '10px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <SectionBox title='Header' color={false} />
          <SectionBox title='Section1' color={false} />
          <SectionBox title='Section2' color={false} />
          <SectionBox title='Footer' color={false} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
          }}
        >
          <FontAwesomeIcon icon={faPlus} size='xl' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: '20px',
          py: '20px'
        }}
      >
        <Box
          sx={{
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} size='2xl' />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
            alignItems: 'start',
            width: '1000px',
            height: '250px',
            backgroundColor: 'primary.light',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Typography variant='h6'>Header</Typography>
          <Typography variant='body1'>
            Aqui você pode editar o cabeçalho do seu site
          </Typography>
          <Button variant='contained' color='primary'>
            Editar
          </Button>
        </Box>
        <Box
          sx={{
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} size='2xl' />
        </Box>
      </Box>
      <Box></Box>
      <Footer />
    </>
  );
}
