import { TextField } from '@mui/material';

interface DescriptionTextProps {
  descriptionText: string
  setDescription: (value: string) => void
  width?: string
  middle?: boolean
  position?: string
  placeholder?: string
}

export default function DescriptionText({
  descriptionText,
  setDescription,
  width = "800px",
  middle = false,
  position = "start",
  placeholder = "Escreva sua descrição",
}: DescriptionTextProps) {
  return (
    <TextField
          value={descriptionText}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={placeholder}
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
                textAlignLast: middle ? 'center' : (position as React.CSSProperties['textAlignLast']),
                fontSize: '1rem',
                fontWeight: 'normal',
                color: 'inherit',
              },
            },
          }}
        />
  );
}
