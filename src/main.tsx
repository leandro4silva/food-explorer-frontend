import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import DarkTheme from './styles/theme/dark';
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
