import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../../shared/components/header/Header';
import Footer from '../../shared/components/footer/Footer';

const Home: React.FC = () => {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Header />
      <Box
        component='main'
        flexGrow={1}
        display='flex'
        alignItems='center'
        justifyContent='center'
        p={4}
      >
        <Typography
          variant='h1'
          align='center'
          sx={{ fontSize: { xs: '2rem', md: '4rem' }, color: 'primary.main' }}
        >
          Bem-vindo ao LP_Creator
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
