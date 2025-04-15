import { Box } from '@mui/material';
import TitleText from '../components/titleText/TitleText';
import DescriptionText from '../components/descriptionText/DescriptionText';
import ButtonText from '../components/buttonText/ButtonText';
import ImageBox from '../components/imageBox/ImageBox';
import TextBox from './component/textBox/TextBox';
import React from 'react';

const style_outBox = {
  px: 5,
  py: 10,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const style_innerBox = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
};

interface ElementSectionProps {
  titleText: string;
  setTitleText: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  buttonText: string;
  setButtonText: (value: string) => void;
  titleBox: any[];
  setTitleBox: (value: any[]) => void;
}

export default function ElementSection(props: ElementSectionProps) {
  const {
    titleText,
    setTitleText,
    buttonText,
    setButtonText,
    description,
    setDescription,
    titleBox,
    setTitleBox,
  } = props;

  const handleTitle = (value: string, index: number) => {
    const newTitleBox = [...titleBox];
    newTitleBox[index] = { ...newTitleBox[index], titleBox: value };
    setTitleBox(newTitleBox);
  };

  const handleDescription = (value: string, index: number) => {
    const newTitleBox = [...titleBox];
    newTitleBox[index] = { ...newTitleBox[index], descriptionBox: value };
    setTitleBox(newTitleBox);
  };

  const handleButton = (value: string, index: number) => {
    const newTitleBox = [...titleBox];
    newTitleBox[index] = { ...newTitleBox[index], buttonBox: value };
    setTitleBox(newTitleBox);
  };

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
          width: '50%',
        }}
      >
        <Box>
          <TitleText
            titleText={titleText}
            setTitle={setTitleText}
            width='300px'
          />
        </Box>
        <DescriptionText
          descriptionText={description}
          setDescription={setDescription}
          width='500px'
        />
        <ButtonText
          hasIcon={false}
          buttonText={buttonText}
          setButtonText={setButtonText}
        />
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
          width: '50%',
          alignItems: 'flex-end',
          textAlign: 'right',
        }}
      >
        <Box>
          <TitleText
            titleText={titleText}
            setTitle={setTitleText}
            position='end'
            width='300px'
          />
        </Box>
        <DescriptionText
          descriptionText={description}
          setDescription={setDescription}
          width='300px'
          position='end'
        />
        <ButtonText
          hasIcon={false}
          buttonText={buttonText}
          setButtonText={setButtonText}
        />
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
      <TitleText titleText={titleText} setTitle={setTitleText} middle={true} />
      <DescriptionText
        descriptionText={description}
        setDescription={setDescription}
        middle={true}
      />
      <ButtonText
        hasIcon={false}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
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
        <TextBox
          titleText={titleBox[0].titleBox}
          description={titleBox[0].descriptionBox}
          buttonText={titleBox[0].buttonBox}
          setTitleText={(value) => {
            handleTitle(value, 0);
          }}
          setDescription={(value) => {
            handleDescription(value, 0);
          }}
          setButtonText={(value) => {
            handleButton(value, 0);
          }}
        />
        <Box mt={-1}>
          <TextBox
            titleText={titleBox[1]?.titleBox}
            description={titleBox[1]?.descriptionBox}
            buttonText={titleBox[1]?.buttonBox}
            setTitleText={(value) => {
              handleTitle(value, 1);
            }}
            setDescription={(value) => {
              handleDescription(value, 1);
            }}
            setButtonText={(value) => {
              handleButton(value, 1);
            }}
          />
        </Box>
        <TextBox
          titleText={titleBox[2]?.titleBox}
          description={titleBox[2]?.descriptionBox}
          buttonText={titleBox[2]?.buttonBox}
          setTitleText={(value) => {
            handleTitle(value, 2);
          }}
          setDescription={(value) => {
            handleDescription(value, 2);
          }}
          setButtonText={(value) => {
            handleButton(value, 2);
          }}
        />
      </Box>
    </Box>
  );

  const sectionList = [
    <React.Fragment key='section1'>{section1}</React.Fragment>,
    <React.Fragment key='section2'>{section2}</React.Fragment>,
    <React.Fragment key='section3'>{section3}</React.Fragment>,
    <React.Fragment key='section4'>{section4}</React.Fragment>,
  ];

  return sectionList;
}
