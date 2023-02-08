import Link from 'next/link';
import { BotonAccion } from '../../componentes/botones';
import { LayoutDentro } from '../../componentes/layaouts';
import { TablaInformativa } from '../../componentes/tabla/informativa/TablaInformativa';

import {
	Contenedor,
	ContenedorReferidos,
	ContenedorCodigo,
	CodigoQR,
	ContenedorReferidosTexto,
	TextoTitulo,
	TextoParrafo,
	TextoInput,
	ContenedorDatos,
	ContenedorDato,
	TituloDatos,
	SubTituloDatos,
	MontoDatos,
	ContenedorListas,
	ContenedorTextoDatos,
	ContenedorTextoMonto,
	TituloLista,
	ContenedorListaBoton,
	BotonLista,
	TextoInputBoton,
	ContenedorInput,
	ContenedorDatosDentro,
	FondoBlanco,
	Fondozul,
	ContenedorBotonesListas,
	ContenedorListaTlf,
	ContenedorListaEscritorio,
	ContenedorFondo,
} from './dashboardStyled';

export default function dashboard() {
	return (
		<LayoutDentro title="Dashboard">
			<Contenedor>
				<ContenedorReferidos>
					<ContenedorCodigo>
						<CodigoQR>codigo</CodigoQR>
						<ContenedorFondo>
							<FondoBlanco />
							<Fondozul />
						</ContenedorFondo>
					</ContenedorCodigo>
					<ContenedorReferidosTexto>
						<TextoTitulo>¡Hola!</TextoTitulo>
						<TextoParrafo>
							Aquí tienes, tu código para referir personas. Puedes copiar la
							información o descargar y envíar tu código QR.
						</TextoParrafo>
						<ContenedorInput>
							<TextoInput></TextoInput>
							<TextoInputBoton>Copiar</TextoInputBoton>
						</ContenedorInput>
					</ContenedorReferidosTexto>
				</ContenedorReferidos>

				<ContenedorDatos>
					<ContenedorDatosDentro>
						<ContenedorDato>
							<ContenedorTextoDatos>
								<TituloDatos>Ventas Directas</TituloDatos>
								<SubTituloDatos>Resumen del mes</SubTituloDatos>
							</ContenedorTextoDatos>
							<ContenedorTextoMonto>
								<MontoDatos>2.500 USD</MontoDatos>
							</ContenedorTextoMonto>
						</ContenedorDato>
						<ContenedorDato>
							<ContenedorTextoDatos>
								<TituloDatos>Ventas Directas</TituloDatos>
								<SubTituloDatos>Resumen del mes</SubTituloDatos>
							</ContenedorTextoDatos>
							<ContenedorTextoMonto>
								<MontoDatos>2.500 USD</MontoDatos>
							</ContenedorTextoMonto>
						</ContenedorDato>
					</ContenedorDatosDentro>
					<ContenedorDatosDentro>
						<ContenedorDato>
							<ContenedorTextoDatos>
								<TituloDatos>Ventas Directas</TituloDatos>
								<SubTituloDatos>Resumen del mes</SubTituloDatos>
							</ContenedorTextoDatos>
							<ContenedorTextoMonto>
								<MontoDatos>2.500 USD</MontoDatos>
							</ContenedorTextoMonto>
						</ContenedorDato>
						<ContenedorDato>
							<ContenedorTextoDatos>
								<TituloDatos>Ventas Directas</TituloDatos>
								<SubTituloDatos>Resumen del mes</SubTituloDatos>
							</ContenedorTextoDatos>
							<ContenedorTextoMonto>
								<MontoDatos>2.500 USD</MontoDatos>
							</ContenedorTextoMonto>
						</ContenedorDato>
					</ContenedorDatosDentro>
				</ContenedorDatos>

				<ContenedorBotonesListas>
					<BotonAccion
						text="Mis movimientos"
						href=""
					/>
					<BotonAccion
						text="Mis referidos"
						href=""
					/>
				</ContenedorBotonesListas>
				<ContenedorListas>
					<ContenedorListaTlf>
						<TituloLista>Mis movimientos</TituloLista>
						<TablaInformativa />
						<ContenedorListaBoton>
							<Link href="/movimientos">
								<BotonLista>Ver todos los movimientos</BotonLista>
							</Link>
						</ContenedorListaBoton>
					</ContenedorListaTlf>
					<ContenedorListaEscritorio>
						<TituloLista>Mis Referidos</TituloLista>
						<TablaInformativa />
						<ContenedorListaBoton>
							<Link href="/referidos">
								<BotonLista>Ver todos los movimientos</BotonLista>
							</Link>
						</ContenedorListaBoton>
					</ContenedorListaEscritorio>
				</ContenedorListas>
				<ContenedorBotonesListas>
					<BotonAccion
						text="Ver todos los movimientos"
						href=""
					/>
				</ContenedorBotonesListas>
			</Contenedor>
		</LayoutDentro>
	);
}
