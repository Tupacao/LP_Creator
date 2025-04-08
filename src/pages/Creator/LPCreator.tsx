import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../shared/components/footer/Footer';
import Header from '../../shared/components/header/Header';
import ChangeBox from '../creator/components/changeBox/ChangeBox';
import SectionBox from '../creator/components/sectionBox/SectionBox';
import ModalButton from '../creator/components/modalButton/ModalButton';
import ElementLibrary from '../elementsLibrary/ElementLibrary';

const elementFooter = Object.values(ElementLibrary.ElementFooter);
const elementHeader = Object.values(ElementLibrary.ElementHeader);
const elementSection = Object.values(ElementLibrary.ElementSection);

export default function LPCreator() {
  const [dataSection, setDataSection] = useState([
    { title: 'Section 1', color: false },
  ]);

  const [activateType, setActiveType] = useState<String>('Header 0');
  const [indexClick, setIndexClick] = useState<number>(-1);
  const [elmentIndex, setElementIndex] = useState<number>(0);

  const handleClickType = (title: String, index: number) => {
    setActiveType(title);
    setElementIndex(index);
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
    const newSection = dataSection.filter((_item, i) => i !== index);
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
          p: '10px',
          justifyContent: 'space-around',
          backgroundColor: 'background.default',
          width: '80%',
          mx: 'auto',
          mt: '20px',
          borderRadius: '4px',
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
          data-testid='add-section'
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
          data-testid='left-click'
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
            boxShadow: 8,
          }}
        >
          {indexClick == -1
            ? elementHeader[elmentIndex]
            : indexClick == dataSection.length
              ? elementFooter[elmentIndex]
              : elementSection[elmentIndex]}
        </Box>
        <Box
          data-testid='right-click'
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
        {indexClick == -1
          ? elementHeader.map((_item, index) => (
              <ChangeBox
                key={index}
                title={`Header ${index}`}
                color={activateType == `Header ${index}`}
                onClickFunction={() =>
                  handleClickType(`Header ${index}`, index)
                }
              />
            ))
          : indexClick == dataSection.length
            ? elementFooter.map((_item, index) => (
                <ChangeBox
                  key={index}
                  title={`Footer ${index}`}
                  color={activateType == `Footer ${index}`}
                  onClickFunction={() =>
                    handleClickType(`Footer ${index}`, index)
                  }
                />
              ))
            : elementSection.map((_item, index) => (
                <ChangeBox
                  key={index}
                  title={`Section ${index}`}
                  color={activateType == `Section ${index}`}
                  onClickFunction={() =>
                    handleClickType(`Section ${index}`, index)
                  }
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
