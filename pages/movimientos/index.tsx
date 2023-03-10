import Image from 'next/image';
import Link from 'next/link';

import { BotonImagen } from '../../componentes/botones/BotonImagen';
import { LayoutDentro } from '../../componentes/layaouts';
import { TablaMovimientos } from '../../componentes/tabla';
import {
	Contenedor,
	ContenedorTabla,
	ContenedorRuta,
	ContenedorListaBoton,
	Titulo,
	FondoFlecha,
	Flecha,
} from './movimientosStyled';

export default function Movimientos() {
	return (
		<LayoutDentro title="Movimientos">
			<Contenedor>
				<ContenedorRuta>
					<FondoFlecha>
						<BotonImagen>
							<Flecha>
								<Link href="/dashboard">
									<Image
										src="/images/iconos/flecha_izq.png"
										alt="Img"
										fill
									/>
								</Link>
							</Flecha>
						</BotonImagen>
					</FondoFlecha>
					<Titulo>Mis movimientos</Titulo>
				</ContenedorRuta>
				<ContenedorTabla>
					<TablaMovimientos />
				</ContenedorTabla>
				<ContenedorListaBoton>
					<span>
						<BotonImagen>
							<Flecha>
								<Image
									src="/images/iconos/flecha_blanca_izq.png"
									alt="Img"
									fill
								/>
							</Flecha>
						</BotonImagen>
					</span>
					<p>...</p>
					<span>
						<BotonImagen>
							<Flecha>
								<Image
									src="/images/iconos/flecha_blanca_der.png"
									alt="Img"
									fill
								/>
							</Flecha>
						</BotonImagen>
					</span>
				</ContenedorListaBoton>
			</Contenedor>
		</LayoutDentro>
	);
}
