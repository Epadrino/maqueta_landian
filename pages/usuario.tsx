import Image from 'next/image';

import { useEffect, useState } from 'react';

import { create } from 'domain';

import { BotonAccion } from '../componentes/botones';
import { Input } from '../componentes/inputs';
import { LayoutUsuario } from '../componentes/layaouts';
import { useEstado } from '../hooks';
import Validator from '../hooks/validator';

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
} from '../styles/usuario/StyledUsuario';
import { toast } from 'react-toastify';
import { UserService } from '../utils/requests/user.service';
import { Creado } from '../componentes/mensajes';

export default function Usuario() {
	return (
		<LayoutUsuario title="Usuario">
			<ContenedorCuerpo>
				<ContenedorUno>
					<div>
						<Image
							src="/images/iconos/logo_mockup.png"
							alt="Img"
							fill
						/>
					</div>
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
						/>
					</ContenedorDeBoton>
				</ContenedorDos>
			</ContenedorCuerpo>
			<Creado active={false} />
		</LayoutUsuario>
	);
}
