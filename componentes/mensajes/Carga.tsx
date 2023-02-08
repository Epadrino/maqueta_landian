import Image from 'next/image';
import React from 'react';

import {
	Caja,
	Contenedor,
	ContenedorMensaje,
	MensajeUno,
} from './StyledMensaje';

export const Carga = () => {
	return (
		<Contenedor>
			<ContenedorMensaje>
				<Caja>
					<Image
						src='/images/iconos/loader_outline.png'
						alt='imagen'
						width={175}
						height={175}
					/>
					<MensajeUno>
						Estamos confirmando tu compra, tomará solo un minuto
					</MensajeUno>
				</Caja>
			</ContenedorMensaje>
		</Contenedor>
	);
};
