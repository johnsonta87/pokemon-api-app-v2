import React from 'react';
import ReactDOM from 'react-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';

import { GlobalStyle, theme } from './theme/globalStyles';

import { details } from './store/states';

createStore({
  details,
});

const queryClient = new QueryClient();

ReactDOM.render(
  <StateMachineProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StateMachineProvider>,
  document.getElementById('root')
);
