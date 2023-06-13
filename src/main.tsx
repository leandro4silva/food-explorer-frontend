import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import DarkTheme from './styles/theme/dark';
import { Router } from './router';
import { AuthProvider } from './hooks/auth';
import { SessionProvider } from './hooks/session';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <AuthProvider>
    <SessionProvider>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </SessionProvider>
  </AuthProvider>

)
