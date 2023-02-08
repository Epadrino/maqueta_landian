import Image from 'next/image';
import { useRouter } from 'next/router';

import { useContext, useEffect, useState } from 'react';

import { BotonWallet } from '../../componentes/botones';
import { LayoutInicio } from '../../componentes/layaouts';
import UseContext from '../../utils/Context/UseContext';
import { UserService } from '../../utils/requests/user.service';

import { toast } from 'react-toastify';
import {
	Contenedor,
	ContenedorBoton,
	ContenedorUno,
	TituloWalled,
	ContenedorTexto,
	Metamask,
	WalletConnect,
} from './walledStyled';

export default function Wallet() {
	return (
		<LayoutInicio title="Wallet">
			<Contenedor>
				<ContenedorUno>
					<div>
						<Image
							src="/images/logo/logo_mockup.png"
							alt="Cargando Logo"
							fill
						/>
					</div>
				</ContenedorUno>
				<ContenedorTexto>
					<TituloWalled>Conecta tu Wallet.</TituloWalled>
				</ContenedorTexto>
				<ContenedorBoton>
					<BotonWallet
						text="Connect with MetaMask"
						onClick={() => {}}
					>
						<Metamask>
							<Image
								src="/images/iconos/Metamask.png"
								alt="Img"
								fill
							/>
						</Metamask>
					</BotonWallet>
					<BotonWallet
						text="Connect with Walle Connect"
						onClick={() => {}}
					>
						<WalletConnect>
							<Image
								src="/images/iconos/wallet_connect.png"
								alt="Img"
								fill
							/>
						</WalletConnect>
					</BotonWallet>
				</ContenedorBoton>
			</Contenedor>
		</LayoutInicio>
	);
}
