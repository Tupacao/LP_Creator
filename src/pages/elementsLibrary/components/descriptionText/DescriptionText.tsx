import { TextField, Typography } from '@mui/material';

interface DescriptionTextProps {
  descriptionText: string;
  isStrong?: boolean;
  setDescription?: (value: string) => void;
}

export default function DescriptionText({
  descriptionText,
  isStrong = false,
}: DescriptionTextProps) {
  return (
    <Typography
      data-testid='description-text'
      fontSize={'16px'}
      fontFamily={'Poppins, sans-serif'}
      fontWeight={isStrong ? 'bold' : 'normal'}
    >
      {descriptionText}
    </Typography>
    // <TextField
    //       value={descriptionText}
    //       onChange={(e) => setDescription(e.target.value)}
    //       placeholder='Criamos móveis sob medida que refletem sua personalidade e atendem às
    //     suas necessidades. Cada peça é única, feita com materiais de alta
    //     qualidade e um cuidado excepcional em cada detalhe.'
    //       variant='standard'
    //       multiline
    //       sx={{
    //         backgroundColor: 'transparent',
    //         whiteSpace: 'pre-wrap',
    //         wordWrap: 'break-word',
    //         overflowWrap: 'break-word',
    //       }}
    //       slotProps={{
    //         input: {
    //           disableUnderline: true,
    //           style: {
    //             width: '800px',
    //             textAlignLast: 'center',
    //             margin: '0 auto',
    //             fontSize: '1rem',
    //             fontWeight: 'normal',
    //             color: 'inherit',
    //           },
    //         },
    //       }}
    //     />
  );
}
