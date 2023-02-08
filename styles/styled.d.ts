import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			tertiary: string;
		};
		backgrounds: {
			primary: string;
			secondary: string;
			tertiary: string;
			producs: string;
			header: string;
		};
		fonts: {
			primary: string;
			secondary: string;
		};
	}
}
