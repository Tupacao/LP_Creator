import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Footer: React.FC= () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
        padding: '16px',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant='h6'
              sx={{ color: 'secondary.main', fontWeight: 'bold' }}
            >
              Footer
            </Typography>
            <Typography
              variant='body1'
              sx={{ color: 'background.default', marginTop: '8px' }}
            >
              Para fazer com que ao clicar na logo seja redirecionado para a página inicial, você pode envolver a imagem da logo com o componente Link do react-router-dom. Aqui está como você pode fazer isso:
            </Typography>
            <Button
              sx={{
                backgroundColor: 'background.default',
                color: 'primary.main',
                marginTop: '16px',
              }}
            >
              Botão
            </Button>
          </Box>
          <Box>{/* Espaço vazio para futuros elementos */}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
