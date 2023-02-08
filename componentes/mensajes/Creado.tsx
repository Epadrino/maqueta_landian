import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BotonAccion } from '../botones';
import {
	Caja,
	Contenedor,
	ContenedorMensaje,
	MensajeUno,
} from './StyledMensaje';

type Props = {
	active: boolean;
};

export const Creado = ({ active }: Props) => {
	const router = useRouter();

	return (
		<Contenedor active={active}>
			<ContenedorMensaje>
				<Caja>
					<Image
						src='/images/iconos/mensaje_checks.png'
						alt='imagen'
						width={175}
						height={175}
					/>
					<MensajeUno>
						Tu cuenta ha sido creada correctamente
					</MensajeUno>
					<BotonAccion
						text='Continuar'
						onClick={() => router.push('/planesV')}
					/>
				</Caja>
			</ContenedorMensaje>
		</Contenedor>
	);
};
