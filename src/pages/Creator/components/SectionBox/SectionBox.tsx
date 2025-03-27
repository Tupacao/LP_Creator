import { faLock, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';

interface SectionBoxProps {
  title: string;
  color: boolean;
  onClickFunction?: () => void;
}

export default function SectionBox({
  title,
  color,
  onClickFunction,
}: SectionBoxProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          color: 'primary.main',
          padding: '10px',
          backgroundColor: color ? 'primary.light' : 'background.default',
          width: '100px',
          borderRadius: '4px',
          cursor:
            title != 'Footer' && title != 'Header' ? 'pointer' : 'default',
        }}
      >
        <Typography>{title}</Typography>
        <FontAwesomeIcon
          icon={title != 'Footer' && title != 'Header' ? faTrash : faLock}
        />
      </Box>
      {title != 'Footer' && title != 'Header' && (
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'primary.light',
              borderRadius: '4px',
              boxShadow: 24,
              py: 4,
            }}
          >
            <Typography variant='h5' textAlign={'center'} mb={'20px'}>
              {`Deseja excluir a seção ${title}?`}
            </Typography>
            <Box display={'flex'} justifyContent={'center'} gap={'10px'}>
              <Button
                variant='contained'
                color='success'
                onClick={onClickFunction}
              >
                Sim
              </Button>
              <Button onClick={handleClose} variant='contained' color='error'>
                Não
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
}
