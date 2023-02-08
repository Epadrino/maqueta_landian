import Head from 'next/head';

import { FC, PropsWithChildren } from 'react';
import { Idioma } from '../../idiomas';
import {
	Cabecera,
	ContenedorIdioma,
	CuerpoUsuario,
	Espaciador,
} from '../StyledLayouts';

interface Props {
	title?: string;
	description?: string;
}
export const LayoutUsuario: FC<PropsWithChildren<Props>> = ({
	children,
	title,
	description,
}) => {
	return (
		<>
			<Head>
				<title>{title || 'Logo Mockup'}</title>
				<meta
					name='description'
					content={`${
						description ||
						'Vive la mejor experiencia y obtén los mejores resulados.'
					}`}
				/>
				<link rel='ico' href='/images/logo/logo_mockup.png' />
			</Head>
			<Cabecera>
				<ContenedorIdioma>
					<Idioma />
					<Espaciador />
				</ContenedorIdioma>
			</Cabecera>
			<CuerpoUsuario>{children}</CuerpoUsuario>
		</>
	);
};
