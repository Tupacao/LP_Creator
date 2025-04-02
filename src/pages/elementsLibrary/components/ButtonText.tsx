import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';

export default function ButtonText({ hasIcon }: { hasIcon: boolean }) {
  return (
    <Button
      endIcon={hasIcon ? <FontAwesomeIcon icon={faPhone} /> : null}
      sx={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 10px',
        fontSize: '12px',
      }}
    >
      ENTRE EM CONTATO
    </Button>
  );
}
