import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme/dark';
import {SignIn} from './pages/SignIn';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<SignIn />
		</ThemeProvider>
	</React.StrictMode>
);
