import Image from 'next/image';
import React from 'react';
import { ButtondeIdioma, Contenedor, IdiomaActivo } from './StyledIdioma';

export const Idioma = () => {
	return (
		<Contenedor>
			<Image
				src='/images/iconos/mundo.png'
				alt='Cargando Logo'
				width={19.17}
				height={19.17}
			/>
			<IdiomaActivo>ESP</IdiomaActivo>
			<ButtondeIdioma>
				<Image
					src='/images/iconos/flecha_de_idioma.png'
					alt='Cargando Logo'
					width={17.06}
					height={9.3}
				/>
			</ButtondeIdioma>
		</Contenedor>
	);
};
