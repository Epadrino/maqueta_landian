import Head from 'next/head';
import Image from 'next/image';

import { FC, PropsWithChildren } from 'react';
import { EnlacePieDePagina } from '../../enlaces';

import { Menu, MenuDeslizante } from '../../menu';
import { RedSocial } from '../../redesSociales';

import {
	ContenedorMenuEsc,
	Cabezera,
	ContenedorDeLogo,
	ContenedorLayout,
	Titulo,
	ContenedorDeMenu,
	Cuerpo,
	Logo,
	PiePagina,
	Contenedor1,
	Contenedor2,
	ContenedorTextoUnoYDos,
	ContenedorTextosUno,
	ContenedorTextosDos,
	Separador,
	Contenedor3,
	TextoRedes,
	ContenedorRedesSociales,
} from './StyledLayoutDentro';

interface Props {
	title?: string;
	description?: string;
}

export const LayoutDentro: FC<PropsWithChildren<Props>> = ({
	children,
	title,
	description,
}) => {
	return (
		<ContenedorLayout>
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
			<Cabezera>
				<ContenedorDeLogo>
					<Logo>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Img'
							fill
						/>
					</Logo>

					<Titulo>LOGO MOCKUP</Titulo>
				</ContenedorDeLogo>
				<ContenedorDeMenu>
					<ContenedorMenuEsc>
						<Menu />
					</ContenedorMenuEsc>
					<MenuDeslizante />
				</ContenedorDeMenu>
			</Cabezera>
			<Cuerpo>{children}</Cuerpo>
			<PiePagina>
				<Contenedor1>
					<Image
						src='/images/logo/logo_mockup.png'
						alt='Cargando Logo'
						width={78}
						height={78}
					/>
				</Contenedor1>
				<Contenedor2>
					<ContenedorTextoUnoYDos>
						<ContenedorTextosUno>
							<EnlacePieDePagina href='' text='Compañía' />
							<EnlacePieDePagina href='' text='Sobre nosotros' />
							<EnlacePieDePagina href='' text='Contáctenos' />
						</ContenedorTextosUno>
						<ContenedorTextosDos>
							<EnlacePieDePagina
								href=''
								text='Politica de Privacidad'
							/>
							<Separador />
							<EnlacePieDePagina
								href=''
								text='Terminos y condiciones'
							/>
						</ContenedorTextosDos>
					</ContenedorTextoUnoYDos>
				</Contenedor2>
				<Contenedor3>
					<TextoRedes>Únete a la comunidad</TextoRedes>
					<ContenedorRedesSociales>
						<RedSocial
							href=''
							src='/images/iconos/icon_discord.png'
							width={22.86}
							height={25.33}
						/>
						<RedSocial
							href=''
							src='/images/iconos/icon_facebook.png'
							width={22.86}
							height={22.72}
						/>
						<RedSocial
							href=''
							src='/images/iconos/icon_gmail.png'
							width={22.86}
							height={17.14}
						/>
						<RedSocial
							href=''
							src='/images/iconos/icon_instagram.png'
							width={22.86}
							height={22.86}
						/>
						<RedSocial
							href=''
							src='/images/iconos/icon_twitter.png'
							width={22.86}
							height={18.58}
						/>
					</ContenedorRedesSociales>
				</Contenedor3>
			</PiePagina>
		</ContenedorLayout>
	);
};
