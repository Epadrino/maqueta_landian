import { BotonAccion } from '../componentes/botones';
import { LayoutDentro } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorProducto,
	Producto,
	ContenedorCompra,
	TituloCompra,
	DescripcionCompra,
	ContenedorDetalles,
	TituloDetalles,
	ItensDetalles,
	ContenedorBoton,
	DescripcionDetalles,
	ListaDetalles,
	PrecioDetalles,
	Espaciador,
} from '../styles/compra/StyledCompra';

export default function compra() {
	return (
		<LayoutDentro title='Compra'>
			<Contenedor>
				<ContenedorProducto>
					<Producto></Producto>
				</ContenedorProducto>

				<ContenedorCompra>
					<TituloCompra>¡Felicidades</TituloCompra>
					<DescripcionCompra>
						A continuacion te mostramos un resumen de tu compra:
					</DescripcionCompra>
				</ContenedorCompra>
				<ContenedorDetalles>
					<TituloDetalles>Nombre tarjeta</TituloDetalles>
					<Espaciador />
					<PrecioDetalles>200USDT</PrecioDetalles>
					<DescripcionDetalles>
						Beneficios: "Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.”
					</DescripcionDetalles>
					<ListaDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
						<ItensDetalles>
							Lorem ipsum dolor sit amet.
						</ItensDetalles>
					</ListaDetalles>
				</ContenedorDetalles>
				<ContenedorBoton>
					<BotonAccion text='Ir a mi Pagina' />
				</ContenedorBoton>
			</Contenedor>
		</LayoutDentro>
	);
}
