import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

interface FooterProps {
  title: string;
  text: string;
  buttonText: string;
}

const Footer: React.FC<FooterProps> = ({ title, text, buttonText }) => {


  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
        padding: '16px',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "secondary.main", fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "background.default", marginTop: '8px' }}>
              {text}
            </Typography>
            <Button
              sx={{
                backgroundColor: "background.default",
                color: "primary.main",
                marginTop: '16px',
              }}
            >
              {buttonText}
            </Button>
          </Box>
          <Box>
            {/* Espaço vazio para futuros elementos */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;