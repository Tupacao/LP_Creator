import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Drawer,
  Modal,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../authentication/AuthContext.tsx';
import userService from '../../services/UserService.ts';

interface DadosUsuarioProps {
  open: boolean;
  onClose: () => void;
}

const DadosUsuario: React.FC<DadosUsuarioProps> = ({ open, onClose }) => {
  const [openModalSair, setOpenModalSair] = useState(false);
  const [openModalExcluir, setOpenModalExcluir] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState<{
    nome: string;
    email: string;
    senha: string;
    id: string;
  } | null>(null);
  const { logout } = useAuth();

  const handleCloseModalSair = () => setOpenModalSair(false);
  const handleCloseModalExcluir = () => setOpenModalExcluir(false);
  const handleOpenModalSair = () => setOpenModalSair(true);
  const handleOpenModalExcluir = () => setOpenModalExcluir(true);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const userData = await userService.getUser(userId);
          setUserData(userData);
        }
      } catch (error: any) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleConfirmSair = () => {
    logout();
    onClose(); // Fecha o Drawer
  };

  const handleConfirmExcluir = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (userId) {
        await userService.deleteAccount(userId);
        localStorage.removeItem('userId');
        logout();
        onClose(); // Fecha o Drawer
      }
    } catch (error: any) {
      console.error('Erro ao excluir a conta:', error);
    } finally {
      handleCloseModalExcluir();
    }
  };

  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <Box
        sx={{
          width: 350,
          height: '100vh',
          p: 3,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 3,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={onClose}
            sx={{ color: 'primary.main' }}
            aria-label='fechar'
          >
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </Box>

        <Typography
          variant='h6'
          sx={{
            mb: 3,
            color: 'primary.main',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          {userData ? userData.nome : 'Carregando...'}{' '}
          {/* Exibe o nome do usuário ou "Carregando..." */}
        </Typography>

        <TextField
          label='Email'
          variant='outlined'
          fullWidth
          value={userData ? userData.email : 'Carregando...'}
          InputProps={{ readOnly: true }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.light',
              },
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'text.primary',
              '&.Mui-focused': {
                color: 'primary.main',
              },
            },
          }}
        />

        <TextField
          label='Senha'
          variant='outlined'
          fullWidth
          type={showPassword ? 'text' : 'password'}
          value={userData ? userData.senha : 'Carregando...'}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={toggleShowPassword}
                  sx={{ color: 'primary.main' }}
                  aria-label='alternar visibilidade da senha'
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 4,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.light',
              },
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'text.primary',
              '&.Mui-focused': {
                color: 'primary.main',
              },
            },
          }}
        />

        <Box sx={{ mt: 'auto', mb: 2 }}>
          <Button
            variant='contained'
            onClick={handleOpenModalSair}
            fullWidth
            sx={{
              py: 1.5,
              mb: 2,
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'secondary.light',
              },
            }}
          >
            Sair
          </Button>
          <Button
            variant='outlined'
            onClick={handleOpenModalExcluir}
            fullWidth
            sx={{
              py: 1.5,
              borderColor: 'error.main',
              color: 'error.main',
              '&:hover': {
                borderColor: 'error.light',
                backgroundColor: 'action.hover',
              },
            }}
          >
            Excluir Conta
          </Button>
        </Box>
        <Modal
          open={openModalSair}
          onClose={handleCloseModalSair}
          aria-labelledby='modal-sair-title'
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              id='modal-sair-title'
              variant='h6'
              sx={{ color: 'primary.main' }}
            >
              Confirmar Saída
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary' }}>
              Tem certeza que deseja sair?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                onClick={handleCloseModalSair}
                variant='outlined'
                sx={{
                  mr: 2,
                  color: 'text.primary',
                  borderColor: 'divider',
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleConfirmSair} // Chama a função de logout
                variant='contained'
                sx={{
                  bgcolor: 'secondary.main',
                  '&:hover': {
                    bgcolor: 'secondary.light',
                  },
                }}
              >
                Confirmar
              </Button>
            </Box>
          </Box>
        </Modal>
        <Modal
          open={openModalExcluir}
          onClose={handleCloseModalExcluir}
          aria-labelledby='modal-excluir-title'
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'error.light',
            }}
          >
            <Typography
              id='modal-excluir-title'
              variant='h6'
              sx={{ color: 'error.main' }}
            >
              Confirmar Exclusão
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary' }}>
              Esta ação é irreversível. Todos os seus dados serão perdidos.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                onClick={handleCloseModalExcluir}
                variant='outlined'
                sx={{
                  mr: 2,
                  color: 'text.primary',
                  borderColor: 'divider',
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleConfirmExcluir} // Chama a função de exclusão
                variant='contained'
                sx={{
                  bgcolor: 'error.main',
                  '&:hover': {
                    bgcolor: 'error.light',
                  },
                }}
              >
                Excluir
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Drawer>
  );
};

export default DadosUsuario;
