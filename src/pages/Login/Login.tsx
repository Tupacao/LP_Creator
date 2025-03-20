import { Box, Button, Link, Typography, TextField } from '@mui/material';

const boxStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  borderRadius: '10px',
  width: '400px',
  height: '400px',
};

function Login() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'background.default',
          height: '100vh',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          px: { mobile: '10px' },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            width: '400px',
            height: '400px',
            mt: { desktop: '100px', mobile: '10px' },
          }}
        >
          <img src='' width={'100%'} height={'100%'} />
        </Box>
        <Box
          sx={{
            backgroundColor: 'primary.light',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            borderRadius: '10px',
            width: '400px',
            height: '400px',
            mb: { desktop: '100px', mobile: '10px' },
          }}
        >
          <Typography
            sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}
          >
            {' '}
            BEM VINDO{' '}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              type='email'
              placeholder='algo@gmail.com'
              color='primary'
              sx={{
                '& .MuiInputBase-input': {
                  color: 'text.secondary',
                },
                '& .MuiInputLabel-root': {
                  color: 'text.primary',
                },
              }}
            />
            <TextField
              id='outlined-basic'
              label='Senha'
              variant='outlined'
              type='password'
              placeholder='......'
              sx={{
                '& .MuiInputBase-input': {
                  color: 'text.secondary',
                },
                '& .MuiInputLabel-root': {
                  color: 'text.primary',
                },
              }}
            />
            <Button variant='contained' sx={{ width: '40%' }}>
              Logar
            </Button>
          </Box>
          <Link
            href='/register'
            textAlign={'center'}
            fontWeight={'bold'}
            sx={{ fontWeight: 'bold', fontSize: '16px' }}
          >
            {' '}
            Não tem uma Conta? Registre aqui{' '}
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Login;
