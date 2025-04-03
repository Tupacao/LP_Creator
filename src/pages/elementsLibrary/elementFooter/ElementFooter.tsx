import { Box } from '@mui/material';
import TittleText from '../components/tittleText/TittleText';
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

export default function ElementFooter() {
  const footer1 = (
    <Box
      data-testid='footer1'
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        mx: 'auto',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          ...style,
        }}
      >
        <TittleText titleText='Entre em Contato' />
        <Box width={'60%'}>
          <DescriptionText
            descriptionText='Atendimento Presencial'
            isStrong={true}
          />
          <DescriptionText descriptionText='Rua Arminda de Lima, 285, Guarulhos On-line para todo o Brasil' />
        </Box>
        <Box>
          <DescriptionText
            descriptionText='Nossas redes Sociais'
            isStrong={true}
          />
          <Box display={'flex'} gap={2}>
            <IconBox />
            <IconBox />
            <IconBox />
          </Box>
        </Box>
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
          <DescriptionText
            descriptionText='Atendimento Presencial'
            isStrong={true}
          />
          <DescriptionText
            descriptionText='Rua Levindo Lopes, 357 - 5º e 12º Andar - Savassi, Belo Horizonte
              - MG, 30140-170'
          />
        </Box>
        <Box>
          <DescriptionText descriptionText='Redes Sociais' isStrong={true} />
          <Box display={'flex'} gap={2}>
            <IconBox />
            <IconBox />
            <IconBox />
          </Box>
        </Box>
        <MapBox width={200} height={150} />
      </Box>
      <Box>
        <DescriptionText
          descriptionText='Copyright 2025 - Todos os direitos reservados'
          isStrong={true}
        />
      </Box>
    </Box>
  );

  const footerList = [
    <React.Fragment key='footer1'>{footer1}</React.Fragment>,
    <React.Fragment key='footer2'>{footer2}</React.Fragment>
  ];

  return footerList;
}
