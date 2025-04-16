import { Box, Button, Typography } from '@mui/material';
import { HeaderData } from '../types';

export const Header1 = ({ data }: { data: HeaderData }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
            py: 6,
            backgroundColor: 'primary.main',
            color: 'white',
        }}
    >
        <Typography variant="h2" component="h1">{data.title}</Typography>
        <Typography variant="h5">{data.subtitle}</Typography>
        <Button variant="contained" color="secondary" size="large">
            {data.buttonText}
        </Button>
    </Box>
);

export const Header2 = ({ data }: { data: HeaderData }) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 4,
            backgroundColor: 'grey.100',
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="subtitle1">{data.subtitle}</Typography>
        </Box>
        <Button variant="outlined" size="large">
            {data.buttonText}
        </Button>
    </Box>
);
