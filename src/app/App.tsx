import { ThemeProvider } from '@mui/material';
import Routers from '../Routers';
import theme from '../shared/styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
