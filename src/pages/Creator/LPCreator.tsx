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
import { useState } from 'react';

export default function LPCreator() {
  const dataType = [
    { title: 'Type0', color: false },
    { title: 'Type1', color: false },
    { title: 'Type3', color: false },
  ];

  const [dataSection, setDataSection] = useState([
    { title: 'Section1', color: false },
    { title: 'Section2', color: false },
    { title: 'Section3', color: false },
  ]);

  const [activateSection, setActiveSection] = useState<String>('Header');
  const [activateType, setActiveType] = useState<String>('Type0');

  const handleClickSection = (title: String) => {
    setActiveSection(title);
  };

  const handleClickType = (title: String) => {
    setActiveType(title);
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
          <SectionBox
            title='Header'
            color={activateSection == 'Header'}
            clickFunction={() => handleClickSection('Header')}
          />
          {dataSection.map((item) => (
            <SectionBox
              key={item.title}
              title={item.title}
              color={activateSection == item.title}
              clickFunction={() => handleClickSection(item.title)}
            />
          ))}
          <SectionBox
            title='Footer'
            color={activateSection == 'Footer'}
            clickFunction={() => handleClickSection('Footer')}
          />
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
          sx={{
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
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
          <Typography variant='h2'>Header</Typography>
          <Typography variant='body1'>
            Aqui você pode editar o cabeçalho do seu site
          </Typography>
          <Button variant='contained' color='primary'>
            Texto Botão
          </Button>
        </Box>
        <Box
          sx={{
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            padding: '10px',
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
          <Button variant='contained' color='primary'>
            Salvar
          </Button>
          <Button variant='contained' color='primary'>
            Apagar
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
