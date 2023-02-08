import { useEffect } from 'react';
import { BotonAccion } from '../componentes/botones';
import { LayoutDentro } from '../componentes/layaouts';
import { Detalles, Productos } from '../componentes/productos';
import { useEstado } from '../hooks';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeTexto,
	ContenedorIzq,
	Parrafo,
	Titulo,
	ContenedorDeProductos,
	Caja,
} from '../styles/planesV/StyledPlanesV';

export default function PlanesV() {
	const { estado, mostrarOcultar } = useEstado();
	useEffect(() => {}, [mostrarOcultar]);

	return (
		<LayoutDentro title='PlanesV'>
			<Contenedor>
				<Caja>
					<ContenedorIzq>
						<ContenedorDeTexto>
							<Titulo>NOMBRE TARJETA</Titulo>
							<Titulo>200 USD</Titulo>
							<Parrafo>
								"Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.”
							</Parrafo>
						</ContenedorDeTexto>
					</ContenedorIzq>
					<ContenedorDeProductos>
						<Productos />
					</ContenedorDeProductos>
					<ContenedorDeBotones>
						<BotonAccion text='Ir a mi Pagar' />

						<BotonAccion
							onClick={mostrarOcultar}
							text='Ver detalles'
						/>
					</ContenedorDeBotones>
				</Caja>
			</Contenedor>
			{estado ? <Detalles onClick={mostrarOcultar} /> : null}
		</LayoutDentro>
	);
}
