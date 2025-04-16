import { Box, Typography } from '@mui/material';
import { FooterData } from '../types';

const Footer1 = ({ data }: { data: FooterData }) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            p: 4,
            bgcolor: 'background.paper',
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">{data.title}</Typography>
            <Typography>{data.address}</Typography>
            {data.socialMedia && (
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <h1>icones</h1>
                </Box>
            )}
        </Box>
        <Typography variant="caption">{data.copyright}</Typography>
    </Box>
);

const Footer2 = ({ data }: { data: FooterData }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            p: 4,
            bgcolor: 'background.paper',
        }}
    >
        <Typography variant="h6">{data.title}</Typography>
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Typography>{data.address}</Typography>
            {data.socialMedia && (
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <h1>icones</h1>
                </Box>
            )}
        </Box>
        <Typography variant="caption">{data.copyright}</Typography>
    </Box>
);

export { Footer1, Footer2 };