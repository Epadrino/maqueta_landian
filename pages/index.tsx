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
} from '../styles/referido/StyledReferido';

export default function Referido() {
	return (
		<LayoutInicio title='Referido'>
			<ContenedorCuerpo>
				<ContenedorUno>
					<ContenedorImangen>
						<div>
							<Image
								src='/images/logo/logo_mockup.png'
								alt='Imagen'
								fill
							/>
						</div>
					</ContenedorImangen>
				</ContenedorUno>
				<ContenedorDos>
					<Contenedor>
						<Input placeholder={'Código de Referido'} />
						<ContenedorIcon>
							<div>
								<Image
									src='/images/iconos/info_circle.png'
									alt='Image'
									fill
								/>
							</div>
						</ContenedorIcon>
					</Contenedor>
					<ContenedorDeBotones>
						<BotonAccion text='Continuar' />
						<BotonAccion text='Ya tengo cuenta' />
					</ContenedorDeBotones>
				</ContenedorDos>
			</ContenedorCuerpo>
		</LayoutInicio>
	);
}
