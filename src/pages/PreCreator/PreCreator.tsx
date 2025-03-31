import { Box, Typography } from '@mui/material';
import Footer from '../../shared/components/footer/Footer';
import Header from '../../shared/components/header/Header';
import FormInput from '../../shared/components/FormInput/FormInput';
import ButtonRedirect from '../../shared/components/ButtonRedirect/ButtonRedirect';
import { useState } from 'react';

export default function PreCreator() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');

  const isValid = () => {
    if (
      name.trim().length > 0 &&
      desc.trim().length > 0 &&
      url.trim().length > 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          backgroundColor: 'primary.light',
          borderRadius: '8px',
          width: '80%',
          mx: 'auto',
          my: 10,
          gap: 4,
          p: 2,
        }}
      >
        <Typography variant='h5' fontWeight={'bold'}>
          Insira as informações da sua LP:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <FormInput
              label='Nome da LP'
              type='name'
              placeholder='Fulano de tal'
              functionOnChange={(e) => setName(e.target.value)}
            />
            <FormInput
              label='Descrição da LP'
              type='string'
              placeholder='Fazemos a diferença ...'
              functionOnChange={(e) => setDesc(e.target.value)}
            />
            <FormInput
              label='Logo'
              type='string'
              placeholder='Insira a url'
              functionOnChange={(e) => setUrl(e.target.value)}
            />
          </Box>
          <Box width={'40%'}>
            <ButtonRedirect
              text='Salvar'
              href={`lp/${name}`}
              able={isValid()}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
