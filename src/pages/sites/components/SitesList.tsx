import { Box, List } from '@mui/material';
import ItemSite from './ItemSite';
import { useEffect, useState } from 'react';
import LandingPageService from '../../../shared/services/LandingPageService';
import { SiteData } from '../../landingPage/types';
import { useAuth } from '../../../shared/authentication/AuthContext';

const SitesList: React.FC = () => {
  const [sites, setSites] = useState<SiteData[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchSites = async () => {
      if (user?.id) {
        try {
          const userSites = await LandingPageService.getUserSites(user.id);
          setSites(userSites);
        } catch (error) {
          console.error('Error fetching sites:', error);
        }
      }
    };

    fetchSites();
  }, [user?.id]);

  return (
    <Box
      component='main'
      display='flex'
      flexDirection='column'
      alignItems='center'
      p={4}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '80%', maxHeight: '400px', overflowY: 'auto' }}>
        <List>
          {sites.map((site) => (
            <ItemSite
              key={site.id}
              site={{
                id: Number(site.id),
                name: site.siteName,
                createdAt: site.createdAt
              }}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SitesList;