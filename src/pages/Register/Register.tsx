import { Box, Link, Typography, Alert } from '@mui/material';
import { useState } from 'react';
import FormInput from '../../shared/components/FormInput/FormInput';
import ButtonRedirect from '../../shared/components/ButtonRedirect/ButtonRedirect';
import { useRegister } from '../../shared/services/AuthService.ts';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const {mutate: register, isLoading} = useRegister();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!nome || !email || !senha || !confirmSenha) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        if (senha !== confirmSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        register({nome, email, senha}, {
            onSuccess: () => {
                navigate('/home');
            }
        });
    };

    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                height: '100vh',
                backgroundColor: 'background.default',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    width: '400px',
                    backgroundColor: 'primary.light',
                    borderRadius: '10px',
                    padding: '20px',
                    mt: {desktop: '100px', mobile: '10px'},
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}
                >
                    CRIE SUA CONTA
                </Typography>

                {error && (
                    <Alert severity="error" sx={{width: '100%'}}>
                        {error}
                    </Alert>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <FormInput
                        label='Nome'
                        type='text'
                        placeholder='Nome'
                        value={nome}
                        functionOnChange={(e) => setNome((e.target as HTMLInputElement).value)}
                        required
                    />
                    <FormInput
                        label='Email'
                        type='email'
                        placeholder='algo@gmail.com'
                        value={email}
                        functionOnChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                        required
                    />
                    <FormInput
                        label='Senha'
                        type='password'
                        value={senha}
                        functionOnChange={(e) => setSenha((e.target as HTMLInputElement).value)}
                        required
                    />
                    <FormInput
                        label='Confirme sua senha'
                        type='password'
                        value={confirmSenha}
                        functionOnChange={(e) => setConfirmSenha((e.target as HTMLInputElement).value)}
                        required
                    />
                    <ButtonRedirect
                        text={isLoading ? 'Criando conta...' : 'Criar conta'}
                        type='submit'
                        disabled={isLoading}
                    />
                </Box>

                <Link
                    href='/login'
                    textAlign={'center'}
                    fontWeight={'bold'}
                    sx={{fontWeight: 'bold', fontSize: '16px'}}
                >
                    Já tem uma conta? Faça login
                </Link>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                    backgroundColor: 'primary.light',
                    width: '400px',
                    height: '400px',
                    mb: {desktop: '100px', mobile: '10px'},
                }}
            >
                <img
                    src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
                    width={'100%'}
                    height={'100%'}
                    alt='logo'
                />
            </Box>
        </Box>
    );
};
