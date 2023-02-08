import Image from 'next/image';

import { useState } from 'react';

import { BotonAccion, BotonMoneda } from '../../componentes/botones';
import { LayoutDentro } from '../../componentes/layaouts';
import { Detalles } from '../../componentes/productos';
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
} from './pagarStyled';

export default function Pagar() {
	const [detalle, setDetalle] = useState(false);

	const onDetalle = () => {
		setDetalle((prevValue) => !prevValue);
	};
	return (
		<LayoutDentro title="Pagar">
			<Contenedor>
				<Caja>
					<ContenedorDeMuestra>producto</ContenedorDeMuestra>
					<TituloUno>¡Genial!</TituloUno>
					<Parrafo>
						Ahora solo queda procesar tu pago, selecciona la moneda con la que
						deseas realizar tu pago y ten en cuenta lo siguiente:
					</Parrafo>
					<ContenedorItem>
						<ul>
							<li>
								Debes contar con BUSD (BEP20) y USDT (BEP20) para pagar el
								paquete. Adicional debes tener BNB (BEP20) para pagar el GAS FEE
							</li>

							<li>Adicional debes tener BNB (BEP20) para pagar el GAS FEE</li>
						</ul>
					</ContenedorItem>
					<TituloDos>Valor a pagar: 200 USD</TituloDos>
					<ContenedorDeBotones>
						<BotonMoneda text={'BUSD'}>
							<IconTether>
								<Image
									src="/images/iconos/icon_TETHER.png"
									alt="img"
									fill
								/>
							</IconTether>
						</BotonMoneda>
						<BotonMoneda text={'BUSD'}>
							<IconBusd>
								<Image
									src="/images/iconos/icon_BUSD.png"
									alt="img"
									fill
								/>
							</IconBusd>
						</BotonMoneda>
					</ContenedorDeBotones>
					<ContenedorDeBotones2>
						<BotonAccion
							text="Pagar"
							href="/compra"
						/>
						<BotonAccion
							text="Ver detalles"
							href=""
							onClick={onDetalle}
						/>
					</ContenedorDeBotones2>
				</Caja>
				{detalle ? (
					<Detalles
						onClick={onDetalle}
						price={100}
					/>
				) : null}
			</Contenedor>
		</LayoutDentro>
	);
}
