import Image from 'next/image';

import { BotonAccion, BotonMoneda } from '../componentes/botones';
import { LayoutDentro } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeBotones2,
	ContenedorDeMuestra,
	IconBusd,
	IconTether,
	ContenedorItem,
	Item,
	Parrafo,
	TituloDos,
	TituloUno,
	Caja,
} from '../styles/pagar/StyledPagar';

export default function Pagar() {
	return (
		<LayoutDentro title='Pagar'>
			<Contenedor>
				<Caja>
					<ContenedorDeMuestra>producto</ContenedorDeMuestra>
					<TituloUno>¡Genial!</TituloUno>
					<Parrafo>
						Ahora solo queda procesar tu pago, selecciona la moneda
						con la que deseas realizar tu pago y ten en cuenta lo
						siguiente:
					</Parrafo>
					<ContenedorItem>
						<ul>
							<li>
								Debes contar con BUSD (BEP20) y USDT (BEP20)
								para pagar el paquete. Adicional debes tener BNB
								(BEP20) para pagar el GAS FEE
							</li>

							<li>
								Adicional debes tener BNB (BEP20) para pagar el
								GAS FEE
							</li>
						</ul>
					</ContenedorItem>
					<TituloDos>Valor a pagar: 200 USD</TituloDos>
					<ContenedorDeBotones>
						<BotonMoneda text={'BUSD'}>
							<IconTether>
								<Image
									src='/images/iconos/icon_TETHER.png'
									alt='img'
									fill
								/>
							</IconTether>
						</BotonMoneda>
						<BotonMoneda text={'BUSD'}>
							<IconBusd>
								<Image
									src='/images/iconos/icon_BUSD.png'
									alt='img'
									fill
								/>
							</IconBusd>
						</BotonMoneda>
					</ContenedorDeBotones>
					<ContenedorDeBotones2>
						<BotonAccion text='Ir a mi Pagar' />
						<BotonAccion text='Ver detalles' />
					</ContenedorDeBotones2>
				</Caja>
			</Contenedor>
		</LayoutDentro>
	);
}
