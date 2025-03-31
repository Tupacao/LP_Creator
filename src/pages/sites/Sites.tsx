import { Box } from '@mui/material';
import Header from '../../shared/components/header/Header';
import Footer from '../../shared/components/footer/Footer';
import SitesList from './components/SitesList.tsx';

const Sites: React.FC = () => {
  return (
    <Box>
      <Header />
      <SitesList />
      <Footer />
    </Box>
  );
};

export default Sites;
