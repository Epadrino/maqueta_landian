import Image from 'next/image';

import { BotonAccion } from '../../componentes/botones';
import { Input } from '../../componentes/inputs';
import { LayoutUsuario } from '../../componentes/layaouts';

import {
	Contenedor,
	ContenedorIcon,
	ContenedorUno,
	ContenedorDos,
	MensajeDos,
	MensajeUno,
	TituloUsuario,
	Pregunta,
	ContenedorMensajeUno,
	ContenedorMensajeTres,
	MensajeTres,
	ContenedorDeBoton,
	ContenedorCuerpo,
	BotonDeLeerMas,
} from './usuarioStyled';

import { Creado } from '../../componentes/mensajes';

export default function Usuario() {
	return (
		<LayoutUsuario title="Usuario">
			<ContenedorCuerpo>
				<ContenedorUno>
					<section>
						<Image
							src="/images/logo/logo_mockup.png"
							alt="Img"
							fill
						/>
					</section>
				</ContenedorUno>
				<ContenedorDos>
					<TituloUsuario>Crea un usuario</TituloUsuario>
					{/* <Pregunta>¿Tienes dudas?</Pregunta> */}
					<Contenedor>
						<Input
							type="text"
							name="username"
							placeholder={'Código de referido'}
							onKeyDown={() => {}}
							onChange={() => {}}
						/>
						<ContenedorIcon>
							<div>
								<Image
									src="/images/iconos/Check.png"
									alt="Img"
									fill
								/>
							</div>
						</ContenedorIcon>
					</Contenedor>
					{/* <ContenedorMensajeUno>
						<MensajeUno>
							Usa solo letras y números. Recuerda que este será el
							usuario que aparece en tu link de referido.
						</MensajeUno>
						<MensajeDos>
							Usa solo letras y números. Recuerda
							{estado
								? ` que este será el usuario que aparece en tu link dereferido.`
								: ` ...`}
							<BotonDeLeerMas onClick={mostrarOcultar}>
								{estado ? 'leer menos' : 'leer más'}
							</BotonDeLeerMas>
						</MensajeDos>
					</ContenedorMensajeUno> */}
					<Input
						type="email"
						name="email"
						placeholder="Ingresa un correo electrónico"
						onKeyDown={() => {}}
						onChange={() => {}}
					/>
					<ContenedorMensajeTres>
						<MensajeTres>
							Lo usaremos únicamente para enviarte información relevante del
							proyecto.
						</MensajeTres>
					</ContenedorMensajeTres>
					<ContenedorDeBoton>
						<BotonAccion
							text="Continuar"
							onClick={() => {}}
							href="/dashboard"
						/>
					</ContenedorDeBoton>
				</ContenedorDos>
			</ContenedorCuerpo>
			<Creado active={false} />
		</LayoutUsuario>
	);
}
