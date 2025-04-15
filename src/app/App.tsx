import { ThemeProvider } from '@mui/material';
import Routers from '../Routers';
import theme from '../shared/styles';
import { Global } from '@emotion/react';
import GlobalStyle from '../shared/styles/GlobalStyle';
import { queryClient } from '../shared/constants/queryClient';
import { QueryClientProvider } from 'react-query';
import { AuthProvider } from '../shared/authentication/AuthContext.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AuthProvider>
              <Routers />
            </AuthProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
