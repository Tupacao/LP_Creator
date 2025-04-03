import { Box } from '@mui/material';
import TittleText from '../components/tittleText/TittleText';
import DescriptionText from '../components/descriptionText/DescriptionText';
import ButtonText from '../components/buttonText/ButtonText';
import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  py: 10,
  px: 5,
  width: '60%',
  gap: 1,
};

export default function ElementHeader() {
  const header1 = (
    <Box
      data-testid='header1'
      sx={{
        ...style,
        alignItems: 'start',
      }}
    >
      <TittleText titleText='Transforme as suas Ideias em realidade com nossos móveis personalizados' />
      <DescriptionText
        descriptionText='Criamos móveis sob medida que refletem sua personalidade e atendem às
        suas necessidades. Cada peça é única, feita com materiais de alta
        qualidade e um cuidado excepcional em cada detalhe.'
      />
      <ButtonText hasIcon={true} />
    </Box>
  );

  const header2 = (
    <Box
      data-testid='header2'
      sx={{
        ...style,
        alignItems: 'center',
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <TittleText titleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquam!' />
      <DescriptionText
        descriptionText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        deleniti omnis quas libero laboriosam vel? Perspiciatis harum facere
        laudantium sequi.'
      />
      <ButtonText hasIcon={false} />
    </Box>
  );

  const headerList = [
    <React.Fragment key='header1'>{header1}</React.Fragment>,
    <React.Fragment key='header2'>{header2}</React.Fragment>,
  ];

  return headerList;
}
