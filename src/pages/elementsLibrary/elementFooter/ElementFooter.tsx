import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';

export default function ElementFooter() {
  const footer1 = (
    <Box
      data-testid='footer1'
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        mx: 'auto',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant='h5' fontWeight={'bold'}>
          Entre em Contato
        </Typography>
        <Box>
          <Typography variant='h6' fontWeight={'bold'}>
            Atendimento Presencial
          </Typography>
          <Typography fontSize={'16px'} width={"60%"}>
            Rua Arminda de Lima, 285, Guarulhos On-line para todo o Brasil
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6' fontWeight={'bold'}>
            Nossas redes Sociais
          </Typography>
          <Box display={'flex'} gap={2}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                width: '30px',
                height: '30px',
                backgroundColor: 'black',
                borderRadius: '50%',
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                width: '30px',
                height: '30px',
                backgroundColor: 'black',
                borderRadius: '50%',
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                width: '30px',
                height: '30px',
                backgroundColor: 'black',
                borderRadius: '50%',
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.650213447616!2d-43.94244832593523!3d-19.939139638590916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c5303de113%3A0xd4ac5a0143894d1b!2sdti%20digital!5e0!3m2!1sen!2sbr!4v1743533216857!5m2!1sen!2sbr'
          width='300'
          height='200'
          style={{ border: 0 }}
          loading='lazy'
        ></iframe>
      </Box>
    </Box>
  );

  const footer2 = (
    <Box
      data-testid='footer2'
      display={'flex'}
      py={8}
      gap={2}
      flexDirection={'column'}
      width={'80%'}
      mx={'auto'}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          gap: 4,
        }}
      >
        <Box>
          <img
            src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
            alt='Logo dti digital'
            width={50}
            height={50}
          />
        </Box>
        <Box>
          <Typography fontSize={'16px'} fontWeight={'bold'}>
            Nossas redes Sociais
          </Typography>
          <Box>
            <Typography fontSize={'16px'} fontWeight={'bold'}>
              Atendimento Presencial
            </Typography>
            <Typography fontSize={'12px'}>
              Rua Levindo Lopes, 357 - 5º e 12º Andar - Savassi, Belo Horizonte
              - MG, 30140-170
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontSize={'16px'} fontWeight={'bold'}>
            Nossas redes Sociais
          </Typography>
          <Box display={'flex'} gap={2}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                width: '30px',
                height: '30px',
                backgroundColor: 'black',
                borderRadius: '50%',
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                width: '30px',
                height: '30px',
                backgroundColor: 'black',
                borderRadius: '50%',
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                width: '30px',
                height: '30px',
                backgroundColor: 'black',
                borderRadius: '50%',
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </Box>
          </Box>
        </Box>
        <Box>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.650213447616!2d-43.94244832593523!3d-19.939139638590916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c5303de113%3A0xd4ac5a0143894d1b!2sdti%20digital!5e0!3m2!1sen!2sbr!4v1743533216857!5m2!1sen!2sbr'
            width='200'
            height='150'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </Box>
      </Box>
      <Box>
        <Typography fontWeight={'bold'} fontSize={'16px'}>
          Copyright 2025 - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );

  const footerList = [footer1, footer2];

  return footerList;
}
