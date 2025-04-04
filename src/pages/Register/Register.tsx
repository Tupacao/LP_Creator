import { Box, Typography, Link, FormGroup } from '@mui/material';
import FormInput from '../../shared/components/formInput/FormInput';
import ButtonRedirect from '../../shared/components/buttonRedirect/ButtonRedirect';

export default function Register() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          height: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            width: '400px',
            backgroundColor: 'primary.light',
            borderRadius: '10px',
            padding: '20px',
            mt: { desktop: '100px', mobile: '10px' },
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            CRIE SUA CONTA
          </Typography>
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <FormInput label='Nome' type='text' placeholder='Nome' />
            <FormInput
              label='Email'
              type='email'
              placeholder='algo@gmail.com'
            />
            <FormInput label='Senha' type='password' />
            <FormInput label='Confirme sua senha' type='password' />
          </FormGroup>
          <ButtonRedirect text='Criar conta' href='/home' />
          <Link
            href='/'
            textAlign={'center'}
            fontWeight={'bold'}
            sx={{ fontWeight: 'bold', fontSize: '16px' }}
          >
            Já tem uma conta? Faça login
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            backgroundColor: 'primary.light',
            width: '400px',
            height: '400px',
            mb: { desktop: '100px', mobile: '10px' },
          }}
        >
          <img
            src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
            width={'100%'}
            height={'100%'}
            alt='logo'
          />
        </Box>
      </Box>
    </>
  );
}
