import React, { useState } from 'react';
import { Box, Typography, Button, Drawer, Modal, IconButton, TextField, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface DadosUsuarioProps {
    open: boolean;
    onClose: () => void;
}

const usuarioMock = {
    nome: 'Usuário Teste',
    email: 'usuario@example.com',
    senha: 'senha123',
};

const DadosUsuario: React.FC<DadosUsuarioProps> = ({ open, onClose }) => {
    const [openModalSair, setOpenModalSair] = useState(false);
    const [openModalExcluir, setOpenModalExcluir] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleCloseModalSair = () => setOpenModalSair(false);
    const handleCloseModalExcluir = () => setOpenModalExcluir(false);
    const handleOpenModalSair = () => setOpenModalSair(true);
    const handleOpenModalExcluir = () => setOpenModalExcluir(true);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{
                width: 350,
                height: '100vh',
                p: 3,
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                        onClick={onClose}
                        sx={{ color: 'primary.main' }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        mb: 3,
                        color: 'primary.main',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: 1
                    }}
                >
                    {usuarioMock.nome}
                </Typography>

                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={usuarioMock.email}
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
                                color: 'primary.main'
                            }
                        }
                    }}
                />

                <TextField
                    label="Senha"
                    variant="outlined"
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={usuarioMock.senha}
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={toggleShowPassword}
                                    sx={{ color: 'primary.main' }}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </IconButton>
                            </InputAdornment>
                        )
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
                                color: 'primary.main'
                            }
                        }
                    }}
                />

                <Box sx={{ mt: 'auto', mb: 2 }}>
                    <Button
                        variant="contained"
                        onClick={handleOpenModalSair}
                        fullWidth
                        sx={{
                            py: 1.5,
                            mb: 2,
                            bgcolor: 'secondary.main',
                            '&:hover': {
                                bgcolor: 'secondary.light',
                            }
                        }}
                    >
                        Sair
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleOpenModalExcluir}
                        fullWidth
                        sx={{
                            py: 1.5,
                            borderColor: 'error.main',
                            color: 'error.main',
                            '&:hover': {
                                borderColor: 'error.light',
                                backgroundColor: 'action.hover'
                            }
                        }}
                    >
                        Excluir Conta
                    </Button>
                </Box>
                <Modal
                    open={openModalSair}
                    onClose={handleCloseModalSair}
                    aria-labelledby="modal-sair-title"
                >
                    <Box sx={{
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
                        borderColor: 'divider'
                    }}>
                        <Typography id="modal-sair-title" variant="h6" sx={{ color: 'primary.main' }}>
                            Confirmar Saída
                        </Typography>
                        <Typography sx={{ mt: 2, color: 'text.secondary' }}>
                            Tem certeza que deseja sair?
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                            <Button
                                onClick={handleCloseModalSair}
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    color: 'text.primary',
                                    borderColor: 'divider'
                                }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                onClick={onClose} // Fecha o drawer também
                                variant="contained"
                                sx={{
                                    bgcolor: 'secondary.main',
                                    '&:hover': {
                                        bgcolor: 'secondary.light',
                                    }
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
                    aria-labelledby="modal-excluir-title"
                >
                    <Box sx={{
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
                        borderColor: 'error.light'
                    }}>
                        <Typography id="modal-excluir-title" variant="h6" sx={{ color: 'error.main' }}>
                            Confirmar Exclusão
                        </Typography>
                        <Typography sx={{ mt: 2, color: 'text.secondary' }}>
                            Esta ação é irreversível. Todos os seus dados serão perdidos.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                            <Button
                                onClick={handleCloseModalExcluir}
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    color: 'text.primary',
                                    borderColor: 'divider'
                                }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                onClick={handleCloseModalExcluir}
                                variant="contained"
                                sx={{
                                    bgcolor: 'error.main',
                                    '&:hover': {
                                        bgcolor: 'error.light',
                                    }
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