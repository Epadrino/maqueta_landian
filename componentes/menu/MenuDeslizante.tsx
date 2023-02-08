import Image from 'next/image';

import { useEstado } from '../../hooks';
import { BotonImagen } from '../botones';
import { Menu } from './Menu';
import { ContenedorBotonX } from './StyledMenu';
import {
	ContenedorMenuTlf,
	MenuTelefono,
	EstiloMenu,
} from './StyledMenuDeslizante';

export const MenuDeslizante = () => {
	const { estado, mostrarOcultar } = useEstado();

	return (
		<ContenedorMenuTlf>
			{estado ? (
				<MenuTelefono>
					<EstiloMenu>
						<ContenedorBotonX>
							<BotonImagen onClick={mostrarOcultar}>
								<Image
									src='/images/iconos/icon_x.png'
									alt='Img'
									width={31}
									height={31}
								/>
							</BotonImagen>
						</ContenedorBotonX>
						<Menu />
					</EstiloMenu>
				</MenuTelefono>
			) : (
				<BotonImagen onClick={mostrarOcultar}>
					<Image
						src='/images/iconos/icon_menu.png'
						alt='Img'
						width={31}
						height={31}
					/>
				</BotonImagen>
			)}
		</ContenedorMenuTlf>
	);
};
