import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface FooterProps {
  title: string;
  text: string;
  buttonText: string;
}

const Footer: React.FC<FooterProps> = ({ title, text, buttonText }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#40231D',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
        padding: '16px',
      }}
    >
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <Typography
            variant='h6'
            sx={{ color: '#F26938', fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: '#D9D9D9', marginTop: '8px' }}
          >
            {text}
          </Typography>
          <Button
            sx={{
              backgroundColor: '#D9D9D9',
              color: '#40231D',
              marginTop: '16px',
            }}
          >
            {buttonText}
          </Button>
        </div>
        <div>{/* Espaço vazio para futuros elementos */}</div>
      </div>
    </Box>
  );
};

export default Footer;
