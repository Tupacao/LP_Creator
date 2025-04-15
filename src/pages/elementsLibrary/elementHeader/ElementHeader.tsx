import { Box } from '@mui/material';
import TitleText from '../components/titleText/TitleText';
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

interface ElementHeaderProps {
  titleText: string;
  setTitleText: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  buttonText: string;
  setButtonText: (value: string) => void;
}

export default function ElementHeader(props: ElementHeaderProps) {
  const {
    titleText,
    setTitleText,
    description,
    setDescription,
    buttonText,
    setButtonText,
  } = props;

  const header1 = (
    <Box
      data-testid='header1'
      sx={{
        ...style,
        alignItems: 'start',
      }}
    >
      <TitleText
        titleText={titleText}
        setTitle={setTitleText}
        placeholder='Type 1'
      />
      <DescriptionText
        descriptionText={description}
        setDescription={setDescription}
        width='600px'
      />
      <ButtonText
        hasIcon={true}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
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
      <TitleText
        titleText={titleText}
        setTitle={setTitleText}
        middle={true}
        placeholder='Type 2'
      />
      <DescriptionText
        descriptionText={description}
        setDescription={setDescription}
        middle={true}
      />
      <ButtonText
        hasIcon={true}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
    </Box>
  );

  const headerList = [
    <React.Fragment key='header1'>{header1}</React.Fragment>,
    <React.Fragment key='header2'>{header2}</React.Fragment>,
  ];

  return headerList;
}
