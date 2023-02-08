import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { BotonImagen } from '../botones';
import { EnlaceMenu } from '../enlaces';
import { Idioma } from '../idiomas';
import {
	ContenedorDeBoton,
	ContenedorDeEnlaces,
	ContenedorSalir,
	LogIng,
	Separador,
	Texto,
} from './StyledMenu';

export const Menu = () => {
	return (
		<>
			<ContenedorDeEnlaces>
				<EnlaceMenu text='Mi página' href='' />
				<EnlaceMenu text='Soporte' href='' />
			</ContenedorDeEnlaces>
			<Separador />
			<ContenedorDeBoton>
				<Idioma />
				<ContenedorSalir>
					<BotonImagen>
						<LogIng>
							<Image
								src='/images/iconos/log_in.png'
								alt='Img'
								fill
							/>
						</LogIng>
					</BotonImagen>
					<Texto>salir</Texto>
				</ContenedorSalir>
			</ContenedorDeBoton>
		</>
	);
};
