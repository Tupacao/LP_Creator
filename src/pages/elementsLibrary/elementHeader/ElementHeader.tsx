import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Typography } from '@mui/material';

export default function ElementHeader({ position }: { position: number }) {
  const header1 = (
    <Box
      data-testid='header1'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        py: 10,
        px: 5,
        gap: 2,
        width: '60%',
      }}
    >
      <Typography
        variant='h3'
        fontFamily={'Poppins, sans-serif'}
        fontWeight={'bold'}
      >
        Transforme as suas Ideias em realidade com nossos móveis personalizados
      </Typography>
      <Typography variant='h6' fontFamily={'Poppins, sans-serif'}>
        Criamos móveis sob medida que refletem sua personalidade e atendem às
        suas necessidades. Cada peça é única, feita com materiais de alta
        qualidade e um cuidado excepcional em cada detalhe.
      </Typography>
      <Button
        endIcon={<FontAwesomeIcon icon={faPhone} />}
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          backgroundColor: 'red',
          color: 'white',
          padding: '10px 20px',
        }}
      >
        ENTRE EM CONTATO
      </Button>
    </Box>
  );

  const header2 = (
    <Box
      data-testid='header2'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 10,
        gap: 2,
        mx: 'auto',
        width: '60%',
        textAlign: 'center',
      }}
    >
      <Typography
        variant='h3'
        fontFamily={'Poppins, sans-serif'}
        fontWeight={'bold'}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquam!
      </Typography>
      <Typography variant='h6' fontFamily={'Poppins, sans-serif'}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        deleniti omnis quas libero laboriosam vel? Perspiciatis harum facere
        laudantium sequi.
      </Typography>
      <Button
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          backgroundColor: 'red',
          color: 'white',
          padding: '10px 20px',
        }}
      >
        ENTRE EM CONTATO
      </Button>
    </Box>
  );

  const headerList = [header1, header2];

  return <>{headerList[position] || header1}</>;
}
