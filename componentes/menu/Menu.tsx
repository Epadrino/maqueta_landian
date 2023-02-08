import Image from 'next/image';
import Link from 'next/link';

import { BotonImagen } from '../botones';
import { EnlaceMenu } from '../enlaces';
import { Idioma } from '../idiomas';
import {
	ContenedorDeBoton,
	ContenedorDeEnlaces,
	ContenedorSalir,
	LogIng,
	Separador,
	Texto,
} from './StyledMenu';

export const Menu = () => {
	return (
		<>
			<ContenedorDeEnlaces>
				<EnlaceMenu
					text="Mi página"
					href="/dashboard"
				/>
				<EnlaceMenu
					text="Soporte"
					href=""
				/>
				<EnlaceMenu
					text="PlanesV"
					href="/planesV"
				/>
				<EnlaceMenu
					text="PlanesV2"
					href="/planesV2"
				/>
			</ContenedorDeEnlaces>
			<Separador />
			<ContenedorDeBoton>
				<Idioma />
				<ContenedorSalir>
					<BotonImagen>
						<Link href="/">
							<LogIng>
								<Image
									src="/images/iconos/log_in.png"
									alt="Img"
									fill
								/>
							</LogIng>
						</Link>
					</BotonImagen>
					<Texto>salir</Texto>
				</ContenedorSalir>
			</ContenedorDeBoton>
		</>
	);
};
