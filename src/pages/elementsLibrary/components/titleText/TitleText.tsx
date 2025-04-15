import { TextField} from '@mui/material';

interface TitleTextProps {
  titleText: string;
  setTitle: (value: string) => void;
  width?: string;
  middle?: boolean
}

export default function TitleText({ titleText, setTitle, middle }: TitleTextProps) {

  return (
    <TextField
      value={titleText}
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
            textAlignLast: middle ? 'center' : 'start',
            margin: '0 auto',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'inherit',
          },
        },
      }}
    />
  );
}
