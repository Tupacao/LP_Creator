import { Box, Typography } from '@mui/material';
import { FooterData } from '../types';

const SocialIcons = () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
        <h3>icones</h3>
    </Box>
);

export const Footer1 = ({ data }: { data: FooterData }) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
            p: 4,
            bgcolor: 'grey.900',
            color: 'white',
        }}
    >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h6">{data.title}</Typography>
            <Typography variant="body2">{data.address}</Typography>
            {data.socialMedia && <SocialIcons />}
        </Box>
        <Typography variant="caption" sx={{ mt: { xs: 2, md: 0 } }}>
            {data.copyright}
        </Typography>
    </Box>
);

export const Footer2 = ({ data }: { data: FooterData }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
            p: 4,
            bgcolor: 'grey.800',
            color: 'white',
        }}
    >
        <Typography variant="h6">{data.title}</Typography>
        <Typography>{data.address}</Typography>
        {data.socialMedia && <SocialIcons />}
        <Typography variant="caption">{data.copyright}</Typography>
    </Box>
);
