import Image from 'next/image';

import { BotonAccion } from '../componentes/botones';
import { Input } from '../componentes/inputs';
import { LayoutInicio } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorIcon,
	ContenedorUno,
	ContenedorDos,
	ContenedorCuerpo,
	ContenedorDeBotones,
	ContenedorImangen,
} from './indexStyled';

export default function Referido() {
	return (
		<LayoutInicio title="Referido">
			<ContenedorCuerpo>
				<ContenedorUno>
					<ContenedorImangen>
						<div>
							<Image
								src="/images/logo/logo_mockup.png"
								alt="Imagen"
								fill
							/>
						</div>
					</ContenedorImangen>
				</ContenedorUno>
				<ContenedorDos>
					<Contenedor>
						<Input
							type={''}
							name={''}
							placeholder={'Código de Referido'}
							onKeyDown={() => {}}
							onChange={() => {}}
						/>
						<ContenedorIcon>
							<div>
								<Image
									src="/images/iconos/info_circle.png"
									alt="Image"
									fill
								/>
							</div>
						</ContenedorIcon>
					</Contenedor>
					<ContenedorDeBotones>
						<BotonAccion
							text="Continuar"
							href="wallet"
						/>
						<BotonAccion
							text="Ya tengo cuenta"
							href="usuario"
						/>
					</ContenedorDeBotones>
				</ContenedorDos>
			</ContenedorCuerpo>
		</LayoutInicio>
	);
}
