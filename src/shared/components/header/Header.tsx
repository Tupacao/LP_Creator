import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#D9D9D9', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar className="flex justify-between flex-wrap">
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#40231D' }}>
          LP Creator
        </Typography>
        <div className="flex space-x-4">
          <Button component={Link} to="/home" sx={{ color: '#40231D' }} className="no-underline hover:underline">
            Home
          </Button>
          <Button component={Link} to="/creator" sx={{ color: '#40231D' }} className="no-underline hover:underline">
            Creator
          </Button>
          <Button component={Link} to="/sites" sx={{ color: '#40231D' }} className="no-underline hover:underline">
            Sites
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button component={Link} to="/user" sx={{ color: '#40231D' }} className="no-underline hover:underline">
            <FontAwesomeIcon icon={faUser} />
          </Button>
          <Button sx={{ color: '#40231D' }} className="no-underline hover:underline">
            Sair
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;