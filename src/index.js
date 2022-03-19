import React from 'react';
import ReactDOM from 'react-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'styled-components';
import App from './App';

import { GlobalStyle, theme } from './theme/globalStyles';

import { details, dashboard } from './store/states';

createStore({
  details,
  dashboard,
});

const queryClient = new QueryClient();

ReactDOM.render(
  <StateMachineProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StateMachineProvider>,
  document.getElementById('root')
);
