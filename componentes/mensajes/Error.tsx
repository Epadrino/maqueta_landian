import Image from 'next/image';
import React from 'react';
import { BotonAccion } from '../botones';
import {
	Caja,
	Contenedor,
	ContenedorMensaje,
	MensajeDos,
	MensajeUno,
} from './StyledMensaje';

export const Error = () => {
	return (
		<Contenedor>
			<ContenedorMensaje>
				<Caja>
					<Image
						src='/images/iconos/bug.png'
						alt='imagen'
						width={175}
						height={175}
					/>
					<MensajeUno>¡Oh wow!</MensajeUno>
					<MensajeDos>Parece que hubo un error</MensajeDos>
					<BotonAccion text='Reintentar' />
				</Caja>
			</ContenedorMensaje>
		</Contenedor>
	);
};
