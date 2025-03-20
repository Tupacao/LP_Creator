import { Box, Button, Link, Typography, TextField } from '@mui/material';
import { use, useEffect, useState } from 'react';

function Login() {
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);

  function seeLoginAndPassword() {
    console.log(email, password);
  }

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
            display: 'flex',
            backgroundColor: 'primary.main',
            width: '400px',
            height: '400px',
            mt: { desktop: '100px', mobile: '10px' },
          }}
        >
          <img
            src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
            width={'100%'}
            height={'100%'}
          />
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant='contained'
              sx={{ width: '40%' }}
              onClick={seeLoginAndPassword}
            >
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
