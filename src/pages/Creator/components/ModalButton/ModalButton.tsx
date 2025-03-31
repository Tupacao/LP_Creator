import { Box, Button, Link, Modal, Typography } from '@mui/material';
import { useState } from 'react';

interface ModalButtonProps {
  titleButton: string;
  titleModal: string;
  url: string;
}

export default function ModalButton({
  titleButton,
  titleModal,
  url,
}: ModalButtonProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant='contained' color='primary'>
        {titleButton}
      </Button>
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
            {titleModal}
          </Typography>
          <Box display={'flex'} justifyContent={'center'} gap={'10px'}>
            <Button
              variant='contained'
              color='success'
              component={Link}
              href={url}
            >
              Sim
            </Button>
            <Button onClick={handleClose} variant='contained' color='error'>
              Não
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
