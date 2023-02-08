import Image from 'next/image';
import { useRouter } from 'next/router';

import { useContext, useEffect, useState } from 'react';

import { BotonWallet } from '../componentes/botones';
import { LayoutInicio } from '../componentes/layaouts';
import UseContext from '../utils/Context/UseContext';
import { UserService } from '../utils/requests/user.service';
import {
	Contenedor,
	ContenedorBoton,
	ContenedorUno,
	TituloWalled,
	ContenedorTexto,
	Metamask,
	WalletConnect,
} from '../styles/wallet/StyledWalled';
import { toast } from 'react-toastify';

export default function Wallet() {
	const router = useRouter();
	const { sponsor } = router.query;

	const [loading, setLoading] = useState(false);
	const { user, ConnectWalletConnect, ConnectMetaMask, ServiceProvider } =
		useContext(UseContext);

	const handleWalleConnect = async () => {
		const provider = await ConnectWalletConnect();
		setLoading(true);
		await ServiceProvider(provider);
	};

	useEffect(() => {
		localStorage.removeItem('user');
		localStorage.removeItem('accout');
	}, []);

	const handleMetamask = async () => {
		const provider = await ConnectMetaMask();
		setLoading(true);
		await ServiceProvider(provider);
	};

	const handleLogin = async (address: string) => {
		const res = await UserService.getUserByWallet(address);
		//console.log(res)
		if (res.status) {
			localStorage.setItem('user', JSON.stringify(res.data));
			setTimeout(() => {
				router.push(`/dashboard`);
			}, 500);
		} else if (sponsor && typeof sponsor == 'string') {
			router.push(
				`/register?wallet=${address}&sponsor=${sponsor.toLowerCase()}`
			);
		} else {
			toast.error('Necesitas un link de referido para registrarte', {
				toastId: 'errorRegister',
			});
			router.push(`/`);
		}
	};

	useEffect(() => {
		if (user && loading) {
			handleLogin(user);
			setLoading(false);
		}
	}, [user, loading]);

	return (
		<LayoutInicio title='Wallet'>
			<Contenedor>
				<ContenedorUno>
					<div>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							fill
						/>
					</div>
				</ContenedorUno>
				<ContenedorTexto>
					<TituloWalled>Conecta tu Wallet.</TituloWalled>
				</ContenedorTexto>
				<ContenedorBoton>
					<BotonWallet
						text='Connect with MetaMask'
						onClick={() => handleMetamask()}
					>
						<Metamask>
							<Image
								src='/images/iconos/Metamask.png'
								alt='Img'
								fill
							/>
						</Metamask>
					</BotonWallet>
					<BotonWallet
						text='Connect with Walle Connect'
						onClick={() => handleWalleConnect()}
					>
						<WalletConnect>
							<Image
								src='/images/iconos/wallet_connect.png'
								alt='Img'
								fill
							/>
						</WalletConnect>
					</BotonWallet>
				</ContenedorBoton>
			</Contenedor>
		</LayoutInicio>
	);
}
