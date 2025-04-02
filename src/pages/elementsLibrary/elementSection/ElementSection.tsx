import { Box, Button, Typography } from '@mui/material';
import TittleText from '../components/TittleText';
import DescriptionText from '../components/DescriptionText';
import ButtonText from '../components/ButtonText';
import ImageBox from './component/ImageBox';
import BoxText from './component/BoxText';

const style = {
  px: 5,
  py: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export default function ElementSection() {
  const section1 = (
    <Box
      data-testid='section1'
      sx={{
        ...style,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'start',
          width: '60%',
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
        ...style,
      }}
    >
      <ImageBox width={300} height={200} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          textAlign: 'right',
          gap: 1,
          width: '60%',
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
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
      <Box display={'flex'} justifyContent={'center'} gap={4}>
        <BoxText />
        <Box mt={-1}>
          <BoxText />
        </Box>
        <BoxText />
      </Box>
    </Box>
  );

  const sectionList = [section1, section2, section3, section4];

  return sectionList;
}
