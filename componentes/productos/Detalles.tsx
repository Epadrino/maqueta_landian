import Image from 'next/image';
import { FC } from 'react';

import { BotonAccion, BotonImagen } from '../botones';
import {
	Contenedor,
	Caja,
	Producto,
	Precio,
	TituloDeTarjeta,
	Descripcion,
	CajaBotonSalir,
	CajaBotonAccion,
	FondoBoton,
	Icon,
} from './StyledDetalles';
interface Props {
	onClick: () => void;
	price: number;
}
export const Detalles: FC<Props> = ({ price, onClick }) => {
	return (
		<Contenedor>
			<Caja>
				<CajaBotonSalir>
					<FondoBoton>
						<BotonImagen onClick={onClick}>
							<Icon>
								<Image
									src='/images/iconos/icon_x_black.png'
									alt='Img'
									fill
								/>
							</Icon>
						</BotonImagen>
					</FondoBoton>
				</CajaBotonSalir>
				<Producto></Producto>
				<Precio>
					<h1>{price.toLocaleString()} USD</h1>
				</Precio>
				<CajaBotonAccion>
					<BotonAccion text={'¡Lo quiero!'} />
				</CajaBotonAccion>
				<TituloDeTarjeta>
					<h1>NOMBRE DE TARJETA</h1>
				</TituloDeTarjeta>
				<Descripcion>
					<ul>
						Beneficios:
						<li>
							<br />
							"Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.”
							<ul>
								<li>Lorem ipsum dolor sit amet.</li>
								<li>Lorem ipsum dolor sit amet.</li>
								<li>Lorem ipsum dolor sit amet.</li>
								<li>Lorem ipsum dolor sit amet.</li>
								<li>Lorem ipsum dolor sit amet.</li>
								<li>Lorem ipsum dolor sit amet.</li>
								<li>Lorem ipsum dolor sit amet.</li>
							</ul>
						</li>
					</ul>
				</Descripcion>
			</Caja>
		</Contenedor>
	);
};
