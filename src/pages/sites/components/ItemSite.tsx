import { useState } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  Typography,
  Box,
  Modal,
  Button,
  Paper,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface ItemSiteProps {
  site: {
    id: number;
    name: string;
    createdAt: string | Date;
  };
}

const ItemSite: React.FC<ItemSiteProps> = ({ site }) => {
  const formattedDate = new Date(site.createdAt).toLocaleDateString();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleViewSite = () => {
    navigate(`/landingpage/${site.id}`);
  };

  return (
    <Box>
      <Paper
        sx={{
          backgroundColor: 'background.default',
          borderRadius: 2,
          padding: 1,
          marginBottom: 1,
          '&:hover': { backgroundColor: 'primary.light', transition: '0.3s' },
        }}
      >
        <ListItem
          disablePadding
          secondaryAction={
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton edge='end' aria-label='view' onClick={handleViewSite}>
                <FontAwesomeIcon icon={faEye} color='primary.main' />
              </IconButton>
              <IconButton edge='end' aria-label='edit'>
                <FontAwesomeIcon icon={faPen} color='secondary.light' />
              </IconButton>
              <IconButton edge='end' aria-label='delete' onClick={handleOpen}>
                <FontAwesomeIcon icon={faTrash} color='secondary.main' />
              </IconButton>
            </Box>
          }
        >
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemText
              primary={
                <Typography variant='h6' color='primary.main' fontWeight={600}>
                  {site.name}
                </Typography>
              }
              secondary={
                <Typography variant='body2' color='text.primary'>
                  {formattedDate}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Confirmar Exclusão
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Tem certeza que deseja excluir este site?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              onClick={handleClose}
              variant='outlined'
              color='primary'
              sx={{ mr: 2 }}
            >
              Cancelar
            </Button>
            <Button onClick={handleClose} variant='contained' color='error'>
              Excluir
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ItemSite;