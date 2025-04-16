import { useState } from 'react';
import MapBox from '../elementsLibrary/elementFooter/components/mapBox/MapBox';
import IconBox from '../elementsLibrary/elementFooter/components/iconBox/IconBox';
import { Box, TextField } from '@mui/material';
import TitleText from '../elementsLibrary/components/titleText/TitleText';
import DescriptionText from '../elementsLibrary/components/descriptionText/DescriptionText';
import ButtonText from '../elementsLibrary/components/buttonText/ButtonText';

export default function Teste() {
  const [title, setTitle] = useState('');
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState(
    'Rua Arminda de Lima, 285, Guarulhos On-line para todo o Brasil',
  );
  const [socialText, setSocialText] = useState('Nossas redes Sociais');

  return (
    <Box
      data-testid='header1'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
        margin: 'auto',
        gap: 1,
        alignItems: 'center',
      }}
    >
      {/* <TitleText titleText='Transforme as suas Ideias em realidade com nossos móveis personalizados' /> */}
      {/* <DescriptionText
        descriptionText='Criamos móveis sob medida que refletem sua personalidade e atendem às
            suas necessidades. Cada peça é única, feita com materiais de alta
            qualidade e um cuidado excepcional em cada detalhe.'
      /> */}

      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Entre em Contato'
        variant='standard'
        multiline
        sx={{
          backgroundColor: 'transparent',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
        slotProps={{
          input: {
            disableUnderline: true,
            style: {
              width: '800px',
              textAlignLast: 'center',
              margin: '0 auto',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'inherit',
            },
          },
        }}
      />
      <TextField
        value={description1}
        onChange={(e) => setDescription1(e.target.value)}
        placeholder='Criamos móveis sob medida que refletem sua personalidade e atendem às suas necessidades. Cada peça é única, feita com materiais de alta qualidade e um cuidado excepcional em cada detalhe.'
        variant='standard'
        multiline
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
        slotProps={{
          input: {
            disableUnderline: true,
            style: {
              textAlignLast: 'center',
              fontSize: '1rem',
              fontWeight: 'normal',
              color: 'inherit',
            },
          },
        }}
      />

      <ButtonText hasIcon={true} />
    </Box>
  );
}
