import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/lp_logo.png'; // Certifique-se de que o caminho para a logo está correto

const Header: React.FC = () => {
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'background.default',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Box component={Link} to='/home'>
          <img
            src={logo}
            alt='LP Creator Logo'
            style={{ height: '65px', width: '65px' }}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to='/home'
            sx={{ color: 'primary.main', textDecoration: 'none' }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to='/creator'
            sx={{ color: 'primary.main', textDecoration: 'none' }}
          >
            Creator
          </Button>
          <Button
            component={Link}
            to='/sites'
            sx={{ color: 'primary.main', textDecoration: 'none' }}
          >
            Sites
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            component={Link}
            to='/user'
            data-testid='user-button'
            sx={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                backgroundColor: 'primary.main',
                color: 'background.default',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesomeIcon icon={faUser} />
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
