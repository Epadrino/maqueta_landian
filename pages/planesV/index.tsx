import { useEffect, useState } from 'react';
import { BotonAccion } from '../../componentes/botones';
import { LayoutDentro } from '../../componentes/layaouts';
import { Detalles, Productos } from '../../componentes/productos';
import { useEstado } from '../../hooks';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeTexto,
	ContenedorIzq,
	Parrafo,
	Titulo,
	ContenedorDeProductos,
	Caja,
} from './planesVStyled';

export default function PlanesV() {
	const [detalle, setDetalle] = useState(false);

	const onDetalle = () => {
		setDetalle((prevValue) => !prevValue);
	};

	return (
		<LayoutDentro title="PlanesV">
			<Contenedor>
				<Caja>
					<ContenedorIzq>
						<ContenedorDeTexto>
							<Titulo>NOMBRE TARJETA</Titulo>
							<Titulo>200 USD</Titulo>
							<Parrafo>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.”
							</Parrafo>
						</ContenedorDeTexto>
					</ContenedorIzq>
					<ContenedorDeProductos>
						<Productos />
					</ContenedorDeProductos>
					<ContenedorDeBotones>
						<BotonAccion
							text="Ir a Pagar"
							href="/pagar"
						/>

						<BotonAccion
							onClick={onDetalle}
							text="Ver detalles"
							href=""
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
