import { Box, Typography } from '@mui/material';
import TitleText from '../components/titleText/TitleText';
import DescriptionText from '../components/descriptionText/DescriptionText';
import IconBox from './components/iconBox/IconBox';
import MapBox from './components/mapBox/MapBox';
import ImageBox from '../components/imageBox/ImageBox';
import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const typographyStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: 'inherit',
};

interface ElementFooterProps {
  addressText: string;
  setAddressText: (value: string) => void;
  copiright: string;
  setCopiright: (value: string) => void;
}

export default function ElementFooter(props: ElementFooterProps) {
  const { addressText, setAddressText, copiright, setCopiright } = props;

  const footer1 = (
    <Box
      data-testid='footer1'
      sx={{
        display: 'flex',
        mx: 'auto',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          ...style,
          width: '50%',
        }}
      >
        <Typography sx={{ ...typographyStyle, fontSize: '1.5rem' }}>
          Entre em contato
        </Typography>
        <Box>
          <Typography sx={{ ...typographyStyle }}>
            Atendimento Presencial
          </Typography>
          <DescriptionText
            descriptionText={addressText}
            setDescription={setAddressText}
          />
        </Box>
        <Box>
          <Typography sx={{ ...typographyStyle, mb: 1 }}>
            Nossas Redes Sociais
          </Typography>
          <Box display={'flex'} gap={2}>
            <IconBox />
            <IconBox />
            <IconBox />
          </Box>
        </Box>
        <TitleText titleText={copiright} setTitle={setCopiright} size='1rem' />
      </Box>
      <MapBox width={300} height={200} />
    </Box>
  );

  const footer2 = (
    <Box
      data-testid='footer2'
      sx={{
        ...style,
        mx: 'auto',
        width: '80%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          gap: 4,
        }}
      >
        <ImageBox width={100} height={100} />
        <Box>
          <Typography sx={{ ...typographyStyle }}>
            Atendimento Presencial
          </Typography>
          <DescriptionText
            descriptionText={addressText}
            setDescription={setAddressText}
            width='200px'
          />
        </Box>
        <Box>
          <Typography sx={{ ...typographyStyle, mb: 1 }}>
            Nossas Redes Sociais
          </Typography>
          <Box display={'flex'} gap={2}>
            <IconBox />
            <IconBox />
            <IconBox />
          </Box>
        </Box>
        <MapBox width={200} height={150} />
      </Box>
      <TitleText titleText={copiright} setTitle={setCopiright} size='1rem' />
    </Box>
  );

  const footerList = [
    <React.Fragment key='footer1'>{footer1}</React.Fragment>,
    <React.Fragment key='footer2'>{footer2}</React.Fragment>,
  ];

  return footerList;
}
