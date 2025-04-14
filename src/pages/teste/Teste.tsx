import { useState } from 'react';
import MapBox from '../elementsLibrary/elementFooter/components/mapBox/MapBox';
import IconBox from '../elementsLibrary/elementFooter/components/iconBox/IconBox';
import { Box, TextField } from '@mui/material';
import TitleText from '../elementsLibrary/components/titleText/TitleText';
import DescriptionText from '../elementsLibrary/components/descriptionText/DescriptionText';
import ButtonText from '../elementsLibrary/components/buttonText/ButtonText';

const style_c = {
  display: 'flex',
  flexDirection: 'column',
  py: 10,
  px: 5,
  width: '60%',
  gap: 1,
};

export default function Teste() {
  // Estados para os textos editáveis
  const [title, setTitle] = useState('Entre em Contato');
  const [description1, setDescription1] = useState('Atendimento Presencial');
  const [description2, setDescription2] = useState(
    'Rua Arminda de Lima, 285, Guarulhos On-line para todo o Brasil',
  );
  const [socialText, setSocialText] = useState('Nossas redes Sociais');

  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  };
  return (
    <>
      {/* <Box
        data-testid='footer1'
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          mx: 'auto',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            ...style,
          }}
        >
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Entre em Contato'
            variant='standard'
            multiline
            sx={{
              backgroundColor: 'transparent',
              maxWidth: '300px',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
            slotProps={{
              input: {
                disableUnderline: true,
                style: {
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'inherit',
                },
              },
            }}
          />

          <Box width={'60%'}>
            <TextField
              value={description1}
              onChange={(e) => setDescription1(e.target.value)}
              placeholder='Atendimento Presencial'
              variant='standard'
              InputProps={{
                disableUnderline: true,
                style: { fontSize: '1rem', color: 'inherit' },
              }}
              sx={{
                backgroundColor: 'transparent',
              }}
            />

            <TextField
              value={description2}
              onChange={(e) => setDescription2(e.target.value)}
              placeholder='Rua Arminda de Lima, 285, Guarulhos On-line para todo o Brasil'
              variant='standard'
              InputProps={{
                disableUnderline: true,
                style: { fontSize: '1rem', color: 'inherit' },
              }}
              sx={{
                backgroundColor: 'transparent',
              }}
            />
          </Box>

          <Box>
            <TextField
              value={socialText}
              onChange={(e) => setSocialText(e.target.value)}
              placeholder='Nossas redes Sociais'
              variant='standard'
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'inherit',
                },
              }}
              sx={{
                backgroundColor: 'transparent',
              }}
            />
            <Box display={'flex'} gap={2}>
              <IconBox />
              <IconBox />
              <IconBox />
            </Box>
          </Box>
        </Box>
        <MapBox width={300} height={200} />
      </Box> */}
      <Box
        data-testid='header1'
        sx={{
          ...style_c,
          alignItems: 'start',
        }}
      >
        <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Entre em Contato'
            variant='standard'
            multiline
            sx={{
              backgroundColor: 'transparent',
              width: '900px',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
            slotProps={{
              input: {
                disableUnderline: true,
                style: {
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'inherit',
                },
              },
            }}
          />
        <TitleText titleText='Transforme as suas Ideias em realidade com nossos móveis personalizados' />
        <DescriptionText
          descriptionText='Criamos móveis sob medida que refletem sua personalidade e atendem às
              suas necessidades. Cada peça é única, feita com materiais de alta
              qualidade e um cuidado excepcional em cada detalhe.'
        />
        <ButtonText hasIcon={true} />
      </Box>
    </>
  );
}
