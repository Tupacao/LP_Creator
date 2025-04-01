import { Box, Button, Typography } from '@mui/material';

export default function ElementSection() {
  const section1 = (
    <Box
      data-testid='section1'
      sx={{
        px: 5,
        py: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box width={'60%'}>
        <Box>
          <Typography fontSize={'18'} fontWeight={'bold'}>
            Lorem, ipsum dolor.
          </Typography>
          <Typography variant='h4' fontWeight={'bold'}>
            Lorem ipsum dolor sit.
          </Typography>
        </Box>
        <Typography width={'80%'} mt={2} fontSize={'12'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          quidem. Mollitia voluptates veniam, iste dolor ut corporis est at ab
          consequatur modi totam obcaecati porro nemo nisi asperiores doloremque
          commodi!
        </Typography>
        <Button
          sx={{
            mt: 2,
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
      <Box>
        <img
          src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
          alt='Placeholder'
          width={300}
          height={200}
        />
      </Box>
    </Box>
  );

  const section2 = (
    <Box
      data-testid='section2'
      sx={{
        px: 5,
        py: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <img
          src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
          alt='Placeholder'
          width={300}
          height={200}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          textAlign: 'right',
        }}
      >
        <Box>
          <Typography fontSize={'18'} fontWeight={'bold'}>
            Lorem, ipsum dolor.
          </Typography>
          <Typography variant='h4' fontWeight={'bold'}>
            Lorem ipsum dolor sit.
          </Typography>
        </Box>
        <Typography mt={2} textAlign={'right'} width={'80%'} fontSize={'12'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          quidem. Mollitia voluptates veniam, iste dolor ut corporis est at ab
          consequatur modi totam obcaecati porro nemo nisi asperiores doloremque
          commodi!
        </Typography>
        <Button
          sx={{
            mt: 2,
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
    </Box>
  );

  const section3 = (
    <Box
      data-testid='section3'
      textAlign={'center'}
      py={10}
      width={'80%'}
      mx={'auto'}
    >
      <Typography variant='h5' fontWeight={'bold'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate
        distinctio laboriosam sed mollitia voluptatem!
      </Typography>
      <Typography mt={2} width={'80%'} mx={'auto'} fontSize={'18px'}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam unde
        incidunt suscipit labore, eligendi animi deleniti voluptates adipisci
        nam voluptatem quasi rem id et in ea tenetur impedit quo? Veritatis?
      </Typography>
      <Button
        sx={{
          mt: 2,
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

  const section4 = (
    <Box data-testid='section4' py={10} px={5}>
      <Typography></Typography>
      <Box display={'flex'} justifyContent={'center'} gap={4}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
          p={2}
          border={'1px solid red'}
          height={'200px'}
          borderRadius={2}
        >
          <Typography variant='h6' fontWeight={'bold'}>
            Lorem, ipsum dolor.
          </Typography>
          <Typography mt={2} fontSize={'12px'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            facilis.
          </Typography>
          <Button
            sx={{
              mt: 2,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              fontWeight: 'bold',
              backgroundColor: 'red',
              color: 'white',
              padding: '5px 10px',
              width: '60%',
            }}
          >
            SAIBA MAIS
          </Button>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
          p={2}
          border={'1px solid red'}
          height={'200px'}
          borderRadius={2}
          mt={-2}
        >
          <Typography variant='h6' fontWeight={'bold'}>
            Lorem, ipsum dolor.
          </Typography>
          <Typography mt={2} fontSize={'12px'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            facilis.
          </Typography>
          <Button
            sx={{
              mt: 2,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              fontWeight: 'bold',
              backgroundColor: 'red',
              color: 'white',
              padding: '5px 10px',
              width: '60%',
            }}
          >
            SAIBA MAIS
          </Button>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
          p={2}
          border={'1px solid red'}
          height={'200px'}
          borderRadius={2}
        >
          <Typography variant='h6' fontWeight={'bold'}>
            Lorem, ipsum dolor.
          </Typography>
          <Typography mt={2} fontSize={'12px'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            facilis.
          </Typography>
          <Button
            sx={{
              mt: 2,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              fontWeight: 'bold',
              backgroundColor: 'red',
              color: 'white',
              padding: '5px 10px',
              width: '60%',
            }}
          >
            SAIBA MAIS
          </Button>
        </Box>
      </Box>
    </Box>
  );

  const sectionList = [section1, section2, section3, section4];

  return sectionList;
}
