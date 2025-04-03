import { Box, Link, Typography } from '@mui/material';
import { useState } from 'react';
import FormInput from '../../shared/components/FormInput/FormInput';
import ButtonRedirect from '../../shared/components/ButtonRedirect/ButtonRedirect';
import { useLogin } from '../../shared/services/AuthService.ts';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useLogin()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        login({ email, senha: password }, {
            onSuccess: (user) => {
                if (user) {
                    navigate('/home');
                } else {
                    setError('Credenciais inválidas. Por favor, tente novamente.');
                }
            }
        });
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'background.default',
                    height: '100vh',
                    alignItems: 'center',
                    gap: '40px',
                    flexWrap: 'wrap',
                    px: { mobile: '10px' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        backgroundColor: 'primary.main',
                        width: '400px',
                        height: '400px',
                        mt: { desktop: '100px', mobile: '10px' },
                    }}
                >
                    <img
                        src='https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg'
                        width={'100%'}
                        height={'100%'}
                        alt='logo'
                    />
                </Box>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        backgroundColor: 'primary.light',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '20px',
                        borderRadius: '10px',
                        width: '400px',
                        height: '400px',
                        mb: { desktop: '100px', mobile: '10px' },
                        p: 3,
                    }}
                >
                    <Typography
                        sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}
                    >
                        BEM VINDO
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
                    )}

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            alignItems: 'center',
                        }}
                    >
                        <FormInput
                            label='Email'
                            type='email'
                            placeholder='algo@gmail.com'
                            value={email}
                            functionOnChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FormInput
                            label='Senha'
                            type='password'
                            value={password}
                            functionOnChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <ButtonRedirect
                            text={isLoading ? 'Carregando...' : 'Logar'}
                            type="submit"
                            disabled={isLoading}
                        />
                    </Box>
                    <Link
                        href='/register'
                        textAlign={'center'}
                        fontWeight={'bold'}
                        sx={{ fontWeight: 'bold', fontSize: '16px' }}
                    >
                        Não tem uma Conta? Registre aqui
                    </Link>
                </Box>
            </Box>
        </>
    );
}

export default Login;