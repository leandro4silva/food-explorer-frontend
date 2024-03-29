import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import DarkTheme from './styles/theme/dark';
import { Router } from './router';
import { AuthProvider } from './hooks/auth';
import { SessionProvider } from './hooks/session';
import { CartProvider } from './hooks/cart';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <AuthProvider>
    <CartProvider>
      <SessionProvider>
        <ThemeProvider theme={DarkTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </SessionProvider>
    </CartProvider>
  </AuthProvider>

)
