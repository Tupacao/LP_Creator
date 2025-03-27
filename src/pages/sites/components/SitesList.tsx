import { Box, List } from "@mui/material";
import ItemSite from "./ItemSite";


interface Site {
    id: number;
    name: string;
    createdAt: string | Date;
}

const sites: Site[] = [
    { id: 1, name: 'Landing Page de Vendas', createdAt: '2024-08-29' },
    { id: 2, name: 'Site Institucional', createdAt: '2024-08-28' },
    { id: 3, name: 'Portfólio Online', createdAt: '2024-08-27' },
    { id: 4, name: 'Blog Pessoal', createdAt: '2024-08-26' },
    { id: 5, name: 'E-commerce', createdAt: '2024-08-25' },
    { id: 6, name: 'Dashboard Admin', createdAt: '2024-08-24' },
    { id: 7, name: 'Sistema de Gestão', createdAt: '2024-08-23' },
];

const SitesList: React.FC = () => {

    return (
        <Box
            component="main"
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={4}
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                flex: 1,
                overflow: "hidden",
            }}
        >
            <Box sx={{ width: '80%', maxHeight: '400px', overflowY: 'auto' }}>
                <List>
                    {sites.map((site) => (
                        <ItemSite key={site.id} site={site} />
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default SitesList;