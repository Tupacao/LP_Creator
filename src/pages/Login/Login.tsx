import { Box, Link, Typography} from '@mui/material';
import { useState } from 'react';
import FormInput from '../../shared/components/Input/FormInput';
import ButtonRedirect from '../../shared/components/Button/ButtonRedirect';

function Login() {
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);

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
            alt='logo'
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
            <FormInput
              label='Email'
              type='email'
              placeholder='algo@gmail.com'
              functionOnChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              label='Senha'
              type='password'
              functionOnChange={(e) => setPassword(e.target.value)}
            />
            <ButtonRedirect text='Logar' href='/home' />
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