import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.default",
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: "primary.main" }}>
          LP Creator
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/home"
            sx={{ color: "primary.main", textDecoration: 'none' }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/creator"
            sx={{ color: "primary.main", textDecoration: 'none' }}
          >
            Creator
          </Button>
          <Button
            component={Link}
            to="/sites"
            sx={{ color: "primary.main", textDecoration: 'none' }}
          >
            Sites
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
            component={Link}
            to="/user"
            sx={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "background.default",
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesomeIcon icon={faUser}  />
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;