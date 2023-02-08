import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles.styled';
import { DarkTheme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={DarkTheme}>
			<GlobalStyle />

			<Component {...pageProps} />
		</ThemeProvider>
	);
}
