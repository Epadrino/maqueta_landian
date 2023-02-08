import React, { useEffect, useReducer } from 'react';
import UseContext from './UseContext';
import UseReducer from './UseReducer';
import Connect from '../../hooks';
import { GET_USER, GET_ID, GET_PROVIDER, SET_USER, GET_BALANCE } from './types';

const UseState = (props) => {
	const { accout, ConnectWalletConnect, ConnectMetaMask } = Connect();

	const initialState = {
		user: null,
		idParams: null,
		provi: null,
		balance: 0,
	};

	const [state, dispatch] = useReducer(UseReducer, initialState);

	useEffect(() => {
		dispatch({
			type: GET_USER,
			payload: accout,
		});
		if (accout) {
			localStorage.setItem('accout', accout);
		}
	}, [accout]);

	const ReferyParams = (id) => {
		dispatch({
			type: GET_ID,
			payload: id,
		});
	};

	const disconnectUser = () => {
		dispatch({
			type: SET_USER,
			payload: null,
		});
	};

	const ServiceProvider = (provider) => {
		dispatch({
			type: GET_PROVIDER,
			payload: provider,
		});
	};

	const getBalance = (balance) => {
		dispatch({
			type: GET_BALANCE,
			payload: balance,
		});
	};

	return (
		<UseContext.Provider
			value={{
				user: state.user,
				disconnect: disconnectUser,
				idParams: state.idParams,
				provi: state.provi,
				ConnectWalletConnect,
				ConnectMetaMask,
				ReferyParams,
				ServiceProvider,
				getBalance,
				balance: state.balance,
			}}
		>
			{props.children}
		</UseContext.Provider>
	);
};
export default UseState;
