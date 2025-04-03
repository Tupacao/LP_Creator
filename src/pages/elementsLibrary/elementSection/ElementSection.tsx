import { Box } from '@mui/material';
import TittleText from '../components/tittleText/TittleText';
import DescriptionText from '../components/descriptionText/DescriptionText';
import ButtonText from '../components/buttonText/ButtonText';
import ImageBox from '../components/imageBox/ImageBox';
import TextBox from './component/textBox/TextBox';
import React from 'react';

const style_outBox = {
  px: 5,
  py: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const style_innerBox = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
};

export default function ElementSection() {
  const section1 = (
    <Box
      data-testid='section1'
      sx={{
        ...style_outBox,
      }}
    >
      <Box
        sx={{
          ...style_innerBox,
          alignItems: 'start',
        }}
      >
        <Box>
          <DescriptionText
            descriptionText='Lorem ipsum dolor sit.'
            isStrong={true}
          />
          <TittleText titleText='Lorem ipsum dolor sit.' />
        </Box>
        <DescriptionText
          descriptionText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          quidem. Mollitia voluptates veniam, iste dolor ut corporis est at ab
          consequatur modi totam obcaecati porro nemo nisi asperiores doloremque
          commodi!'
        />
        <ButtonText hasIcon={false} />
      </Box>
      <ImageBox width={300} height={200} />
    </Box>
  );

  const section2 = (
    <Box
      data-testid='section2'
      sx={{
        ...style_outBox,
      }}
    >
      <ImageBox width={300} height={200} />
      <Box
        sx={{
          ...style_innerBox,
          width: '60%',
          alignItems: 'flex-end',
          textAlign: 'right',
        }}
      >
        <Box>
          <DescriptionText
            descriptionText='Lorem ipsum dolor sit.'
            isStrong={true}
          />
          <TittleText titleText='Lorem ipsum dolor sit.' />
        </Box>
        <DescriptionText
          descriptionText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          quidem. Mollitia voluptates veniam, iste dolor ut corporis est at ab
          consequatur modi totam obcaecati porro nemo nisi asperiores doloremque
          commodi!'
        />
        <ButtonText hasIcon={false} />
      </Box>
    </Box>
  );

  const section3 = (
    <Box
      data-testid='section3'
      sx={{
        ...style_innerBox,
        alignItems: 'center',
        textAlign: 'center',
        mx: 'auto',
        width: '80%',
      }}
    >
      <TittleText
        titleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate
        distinctio laboriosam sed mollitia voluptatem!'
      />
      <DescriptionText
        descriptionText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam unde
        incidunt suscipit labore, eligendi animi deleniti voluptates adipisci
        nam voluptatem quasi rem id et in ea tenetur impedit quo? Veritatis?'
      />
      <ButtonText hasIcon={false} />
    </Box>
  );

  const section4 = (
    <Box data-testid='section4' py={10} px={5}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <TextBox />
        <Box mt={-1}>
          <TextBox />
        </Box>
        <TextBox />
      </Box>
    </Box>
  );

  const sectionList = [
    <React.Fragment key="section1">{section1}</React.Fragment>,
    <React.Fragment key="section2">{section2}</React.Fragment>,
    <React.Fragment key="section3">{section3}</React.Fragment>,
    <React.Fragment key="section4">{section4}</React.Fragment>,
  ];

  return sectionList;
}
