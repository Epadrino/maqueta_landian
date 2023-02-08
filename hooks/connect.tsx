import { useState } from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
// import Auth from "../../Hooks/useAuth";

const Connect = () => {
	const [accout, setAccount] = useState<string>();

	//Funcción para conectar con WalletConnect
	const ConnectWalletConnect = async () => {
		// await Auth();
		//setAccount();
		const Provider = new WalletConnectProvider({
			rpc: {
				56: 'https://bsc-dataseed.binance.org/',
				// 97: "https://data-seed-prebsc-1-s3.binance.org:8545",
			},
			chainId: 56,
		});

		await Provider.enable();
		// @ts-ignore
		const web3 = new Web3(Provider);
		const account = await web3.eth.getAccounts();
		//Guardar  (account) en el estado glabal useState
		setAccount(account[0]);
		localStorage.setItem('user', account[0]);
		return Provider;
	};
	//Funcción para detectar si tiene instalado MetaMask
	const detectCurrentProvider = () => {
		let provider;
		// @ts-ignore
		if (window.ethereum) {
			// @ts-ignore
			provider = window.ethereum;
			// @ts-ignore
		} else if (window.web3) {
			// @ts-ignore
			provider = window.web3.currentProvider;
		} else {
			// console.log("Non-ethereum browser detected. You should install Metamask");
		}

		return provider;
	};
	//Funcción para conectar con MetaMask
	const ConnectMetaMask = async () => {
		// await Auth();
		const currentProvider = detectCurrentProvider();
		if (currentProvider) {
			await currentProvider.request({ method: 'eth_requestAccounts' });
			const web3 = new Web3(currentProvider);
			const userAccount = await web3.eth.getAccounts();
			const account = userAccount[0];
			//let ethBalance = await web3.eth.getBalance(account);
			//Guardar  (account) en el estado glabal useState
			setAccount(account);
			localStorage.setItem('user', account);
			// console.log("use",account)
			return currentProvider;
		}
	};

	return {
		accout,
		ConnectMetaMask,
		ConnectWalletConnect,
	};
};

export default Connect;
