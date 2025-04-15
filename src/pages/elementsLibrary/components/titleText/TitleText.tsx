import { TextField} from '@mui/material';

interface TitleTextProps {
  titleText: string;
  setTitle: (value: string) => void;
  width?: string;
  size?: string;
  middle?: boolean
  position?: string
}

export default function TitleText({ titleText, setTitle, middle, size = "1.5rem", width = "800px", position = "start" }: TitleTextProps) {

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
            width: width,
            textAlignLast: middle ? 'center' : (position as React.CSSProperties['textAlignLast']),
            margin: '0 auto',
            fontSize: size,
            fontWeight: 'bold',
            color: 'inherit',
          },
        },
      }}
    />
  );
}
