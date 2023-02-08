import Image from 'next/image';

import { useState } from 'react';

import { BotonAccion, BotonImagen } from '../../componentes/botones';
import { LayoutDentro } from '../../componentes/layaouts';
import { Detalles } from '../../componentes/productos';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeFlecha,
	ContenedorDeProductos,
	ContenedorDer,
	ContenedorDeTextos,
	ContenedorIzq,
	Productos,
	TextoDeTarjetas,
	Titulo,
	Icon,
	Caja,
} from './planesV2Styled';

export default function PlanesV2() {
	const [detalle, setDetalle] = useState(false);

	const onDetalle = () => {
		setDetalle((prevValue) => !prevValue);
	};
	return (
		<LayoutDentro title="PlanesV2">
			<Contenedor>
				<Caja>
					<ContenedorIzq>
						<Titulo>Selecciona tu paquete</Titulo>
					</ContenedorIzq>
					<ContenedorDer>
						<ContenedorDeProductos>
							<ContenedorDeFlecha>
								<BotonImagen>
									<Icon>
										<Image
											src="/images/iconos/icon_izq.png"
											alt="Img"
											fill
										/>
									</Icon>
								</BotonImagen>
							</ContenedorDeFlecha>
							<Productos>
								<TextoDeTarjetas>NOMBRE TARJETA</TextoDeTarjetas>
								<TextoDeTarjetas>200 USD</TextoDeTarjetas>
							</Productos>
							<Productos>
								<TextoDeTarjetas>NOMBRE TARJETA</TextoDeTarjetas>
								<TextoDeTarjetas>200 USD</TextoDeTarjetas>
							</Productos>
							<Productos>
								<TextoDeTarjetas>NOMBRE TARJETA</TextoDeTarjetas>
								<TextoDeTarjetas>200 USD</TextoDeTarjetas>
							</Productos>
							<ContenedorDeFlecha>
								<BotonImagen>
									<Icon>
										<Image
											src="/images/iconos/icon_der.png"
											alt="Img"
											fill
										/>
									</Icon>
								</BotonImagen>
							</ContenedorDeFlecha>
						</ContenedorDeProductos>
					</ContenedorDer>
					<ContenedorDeTextos>
						<Titulo>NOMBRE TARJETA</Titulo>
						<Titulo>200 USD</Titulo>
					</ContenedorDeTextos>
					<ContenedorDeBotones>
						<BotonAccion
							text="Ir a Pagar"
							href="/pagar"
						/>
						<BotonAccion
							text="Ver detalles"
							href=""
							onClick={onDetalle}
						/>
					</ContenedorDeBotones>
				</Caja>
			</Contenedor>
			{detalle ? (
				<Detalles
					onClick={onDetalle}
					price={100}
				/>
			) : null}
		</LayoutDentro>
	);
}
