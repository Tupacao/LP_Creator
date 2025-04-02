import { ThemeProvider } from '@mui/material';
import Routers from '../Routers';
import theme from '../shared/styles';
import { Global } from '@emotion/react';
import GlobalStyle from '../shared/styles/GlobalStyle';
import { queryClient } from "../shared/constants/queryClient";
import { QueryClientProvider } from "react-query";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
              <Routers />
          </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
