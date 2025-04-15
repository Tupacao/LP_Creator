import { TextField, Typography } from '@mui/material';

interface DescriptionTextProps {
  descriptionText: string;
  setDescription: (value: string) => void;
  width?: string;
  middle?: boolean
}

export default function DescriptionText({
  descriptionText,
  setDescription,
  width = "800px",
  middle = false,
}: DescriptionTextProps) {
  return (
    <TextField
          value={descriptionText}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Criamos móveis sob medida que refletem sua personalidade e atendem às suas necessidades. Cada peça é única, feita com materiais de alta qualidade e um cuidado excepcional em cada detalhe.'
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
                width: width,
                margin: '0 auto',
                textAlignLast: middle ? 'center' : 'start',
                fontSize: '1rem',
                fontWeight: 'normal',
                color: 'inherit',
              },
            },
          }}
        />
  );
}
