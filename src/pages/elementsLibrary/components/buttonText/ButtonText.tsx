import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextField } from '@mui/material';

interface ButtonTextProps {
  hasIcon: boolean;
  buttonText: string;
  setButtonText: (value: string) => void;
}

export default function ButtonText({
  buttonText,
  setButtonText,
  hasIcon,
}: ButtonTextProps) {
  return (
    <Button
      endIcon={
        hasIcon ? (
          <FontAwesomeIcon data-testid='font-icon' icon={faPhone} />
        ) : null
      }
      sx={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 10px',
        fontSize: '12px',
      }}
    >
      <TextField
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
        placeholder='ENTRE EM CONTATO'
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
              textAlignLast: 'center',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'inherit',
            },
          },
        }}
      />
    </Button>
  );
}
