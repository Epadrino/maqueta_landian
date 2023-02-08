import Image from 'next/image';
import React from 'react';
import { BotonAccion } from '../botones';
import {
	Caja,
	Contenedor,
	ContenedorMensaje,
	MensajeUno,
	MensajeDos,
} from './StyledMensaje';

export const Confirmado = () => {
	return (
		<Contenedor>
			<ContenedorMensaje>
				<Caja>
					<Image
						src='/images/iconos/confetti.png'
						alt='imagen'
						width={175}
						height={175}
					/>
					<MensajeUno>¡Ahora si!</MensajeUno>
					<MensajeDos>Disfruta de tu nueva experiencia</MensajeDos>
					<BotonAccion text='Ver Resumen' />
				</Caja>
			</ContenedorMensaje>
		</Contenedor>
	);
};
