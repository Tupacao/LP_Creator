import { Box } from '@mui/material';
import TitleText from '../components/titleText/TitleText';
import DescriptionText from '../components/descriptionText/DescriptionText';
import ButtonText from '../components/buttonText/ButtonText';
import React, { useState } from 'react';

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
      <TitleText titleText={"Algo"}  />
      <DescriptionText
        descriptionText={"Ag"}
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
      <TitleText titleText={"Algo"}  />
      <DescriptionText
        descriptionText={"Ag"}
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
