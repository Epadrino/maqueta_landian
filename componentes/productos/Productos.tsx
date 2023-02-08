import Image from 'next/image';

import React from 'react';

import { BotonImagen } from '../botones';
import {
	Contenedor,
	ContenedorBotonAbajo,
	ContenedorBotonArriba,
	ContenedorDeProductos,
	ContenedorDeProductos1,
	ContenedorDeProductos2,
	Producto1,
	Producto2,
	Icon,
} from './StyledProductos';

export const Productos = () => {
	return (
		<Contenedor>
			<ContenedorDeProductos>
				<ContenedorDeProductos1>
					<Producto1 />
				</ContenedorDeProductos1>
				<ContenedorDeProductos2>
					<ContenedorBotonArriba>
						<BotonImagen>
							<Icon>
								<Image
									src='/images/iconos/icon_arriba.png'
									alt='Img'
									fill
								/>
							</Icon>
						</BotonImagen>
					</ContenedorBotonArriba>
					<Producto2 />
					<Producto2 />
					<Producto2 />
					<ContenedorBotonAbajo>
						<BotonImagen>
							<Icon>
								<Image
									src='/images/iconos/icon_abajo.png'
									alt='Img'
									width={46}
									height={46}
								/>
							</Icon>
						</BotonImagen>
					</ContenedorBotonAbajo>
				</ContenedorDeProductos2>
			</ContenedorDeProductos>
		</Contenedor>
	);
};
