import { ThemeProvider } from '@mui/material';
import Routers from '../Routers';
import theme from '../shared/styles';
import { Global } from '@emotion/react';
import GlobalStyle from '../shared/styles/GlobalStyle';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
