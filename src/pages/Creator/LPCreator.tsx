import { Box, Button, Typography } from '@mui/material';
import Footer from '../../shared/components/footer/Footer';
import Header from '../../shared/components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import SectionBox from './components/SectionBox/SectionBox';
import ChangeBox from './components/ChangeBox/ChangeBox';
import { JSX, useState } from 'react';
import ModalButton from './components/ModalButton/ModalButton';

const number_0 = (
  <>
    <Typography variant='h2'>Header</Typography>
    <Typography variant='body1'>
      Aqui você pode editar o cabeçalho do seu site
    </Typography>
    <Button variant='contained' color='primary'>
      Texto Botão
    </Button>
  </>
);

const number_1 = (
  <>
    <Button variant='contained' color='primary'>
      Texto Botão
    </Button>
    <Typography variant='body1'>
      Aqui você pode editar o cabeçalho do seu site
    </Typography>
    <Typography variant='h2'>Header</Typography>
  </>
);

export default function LPCreator() {
  const [dataType] = useState([
    { title: 'Type0', color: false },
    { title: 'Type1', color: false },
  ]);

  const [dataSection, setDataSection] = useState([
    { title: 'Section1', color: false },
  ]);

  const [component, setComponent] = useState<JSX.Element>(number_0);
  const [activateType, setActiveType] = useState<String>('Type0');
  const [indexClick, setIndexClick] = useState<number>(-1);

  const handleClickType = (title: String) => {
    setActiveType(title);
    setComponent(title == 'Type0' ? number_0 : number_1);
  };

  const handleLeftClick = () => {
    if (indexClick <= -1) {
      return;
    } else {
      setIndexClick(indexClick - 1);
    }
  };

  const handleRightClick = () => {
    if (indexClick >= dataSection.length) {
      return;
    } else {
      setIndexClick(indexClick + 1);
    }
  };

  const addSection = () => {
    if (dataSection.length >= 5) {
      alert('Limite de seções atingido');
      return;
    }
    const newSection = {
      title: `Section${dataSection.length + 1}`,
      color: false,
    };
    setDataSection([...dataSection, newSection]);
  };

  const removeSection = (index: number) => {
    const newSection = dataSection.filter((item, i) => i !== index);
    const newSection2 = newSection.map((item, i) => ({
      title: `Section${i + 1}`,
      color: item.color,
    }));
    setDataSection(newSection2);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          py: '10px',
          px: '10px',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            width: '800px',
          }}
        >
          <SectionBox title='Header' color={indexClick == -1} />
          {dataSection.map((item, index) => (
            <SectionBox
              key={index}
              title={item.title}
              color={indexClick == index}
              onClickFunction={() => {
                removeSection(index);
              }}
            />
          ))}
          <SectionBox title='Footer' color={indexClick == dataSection.length} />
        </Box>
        <Box
          onClick={addSection}
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <FontAwesomeIcon icon={faPlus} size='xl' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: '20px',
          py: '20px',
        }}
      >
        <Box
          onClick={handleLeftClick}
          sx={{
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
            cursor: indexClick == -1 ? 'not-allowed' : 'pointer',
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} size='2xl' />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '10px',
            alignItems: 'start',
            width: '1000px',
            height: '250px',
            backgroundColor: 'primary.light',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          {component}
        </Box>
        <Box
          onClick={handleRightClick}
          sx={{
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
            cursor:
              indexClick == dataSection.length ? 'not-allowed' : 'pointer',
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} size='2xl' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          py: '10px',
        }}
      >
        {dataType.map((item) => (
          <ChangeBox
            key={item.title}
            title={item.title}
            color={activateType == item.title}
            onClickFunction={() => handleClickType(item.title)}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          py: '10px',
        }}
      >
        <Button variant='contained' color='primary'>
          Preview
        </Button>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <ModalButton
            titleButton='Salvar'
            titleModal='Salvar LP?'
            url='/sites'
          />
          <ModalButton
            titleButton='Apagar'
            titleModal='Deseja mesmo apagar?'
            url='/home'
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
