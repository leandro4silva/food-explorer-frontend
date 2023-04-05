import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import DarkTheme from './styles/theme/dark';
import { Router } from './router';
import { AuthProvider } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
