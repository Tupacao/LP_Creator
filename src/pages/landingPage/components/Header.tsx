import { Box, Button, Typography } from '@mui/material';
import { HeaderData } from '../types';

const Header1 = ({ data }: { data: HeaderData }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            p: 4,
        }}
    >
        <Typography variant="h2">{data.title}</Typography>
        <Typography variant="h5">{data.subtitle}</Typography>
        <Button variant="contained" size="large">{data.buttonText}</Button>
    </Box>
);

const Header2 = ({ data }: { data: HeaderData }) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 4,
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="h6">{data.subtitle}</Typography>
        </Box>
        <Button variant="outlined" size="large">{data.buttonText}</Button>
    </Box>
);

export { Header1, Header2 };