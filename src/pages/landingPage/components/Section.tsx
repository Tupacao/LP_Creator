import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { SectionData } from '../types';

export const Section1 = ({ data }: { data: Extract<SectionData, { type: "1" }> }) => (
    <Box sx={{ p: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>
            <Typography variant="h3" gutterBottom>{data.title}</Typography>
            <Typography variant="body1">{data.description}</Typography>
        </Box>
        <Box
            component="img"
            src={data.imageUrl}
            alt={data.title}
            sx={{
                width: { xs: '100%', md: '40%' },
                maxHeight: 400,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
            }}
        />
    </Box>
);

export const Section2 = ({ data }: { data: Extract<SectionData, { type: "2" }> }) => (
    <Box sx={{ p: 4, bgcolor: 'grey.100' }}>
        <Grid container spacing={3}>
            {data.features.map((feature, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>{feature.title}</Typography>
                            <Typography>{feature.description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export const Section3 = ({ data }: { data: Extract<SectionData, { type: "3" }> }) => (
    <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
            Depoimentos
        </Typography>
        <Grid container spacing={4}>
            {data.testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                “{testimonial.text}”
                            </Typography>
                            <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 'bold' }}>
                                - {testimonial.author}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export const Section4 = ({ data }: { data: Extract<SectionData, { type: "4" }> }) => (
    <Box sx={{ p: 4, bgcolor: 'grey.100', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Contato</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, maxWidth: 600, mx: 'auto' }}>
            <Typography>Email: {data.email}</Typography>
            <Typography>Telefone: {data.phone}</Typography>
            <Typography>Endereço: {data.address}</Typography>
        </Box>
    </Box>
);
