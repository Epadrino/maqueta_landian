const url: string = process.env.NEXT_PUBLIC_BASE_API_URL || '';
const urlTx: string = process.env.NEXT_PUBLIC_BASE_TRANSACTION_API_URL || '';
const version: string = process.env.NEXT_PUBLIC_BASE_API_VERSION || '';

const user: string = process.env.NEXT_PUBLIC_SERVICE_USER || '';
const key: string = process.env.NEXT_PUBLIC_SERVICE_PASSWORD || '';

export interface User {
	username: string;
	email: string;
	wallet: string;
	reference_client_id: number;
	id: number;
	role_id: number;
	status_id: number;
}

export class UserService {
	static async getUserByWallet(
		wallet: string
	): Promise<{ status: string; message: string; data?: User }> {
		const token = localStorage.getItem('auth');
		const response = await fetch(
			`${url}/${version}/verify-wallet/${wallet}`,
			{
				method: 'GET',
				headers: {
					authorization: `bearer ${token}`,
				},
			}
		);
		// console.log(`${url}/${version}/user/valid/wallet/${wallet}`);
		const data = await response.json();
		// console.log(data);
		return data;
	}

	static async validateUser(user: string) {
		const token = localStorage.getItem('auth');
		const response = await fetch(
			`${url}/${version}/verify-username/${user}`,
			{
				method: 'GET',
				headers: {
					authorization: `bearer ${token}`,
				},
			}
		);
		// console.log(`${url}/${version}/user/valid/wallet/${wallet}`);
		const data = await response.json();
		// console.log(data);
		return data;
	}

	static async register(user: { username: string; email: string }) {
		const token = localStorage.getItem('auth');
		const response = await fetch(`${url}/${version}/client`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				authorization: `bearer ${token}`,
			},
			body: JSON.stringify(user),
		});
		const data = await response.json();
		return data;
	}

	static async balances(client_id: number) {
		const token = localStorage.getItem('auth');
		const response = await fetch(
			`${url}/${version}/balance-sheet?client_id=${client_id}`,
			{
				method: 'GET',
				headers: {
					authorization: `bearer ${token}`,
				},
			}
		);

		const data = response.json();
		return data;
	}

	static async report(client_id: number) {
		const token = localStorage.getItem('auth');
		const response = await fetch(
			`${url}/${version}/report?client_id=${client_id}&limit=${100}&page=${1}`,
			{
				method: 'GET',
				headers: {
					authorization: `bearer ${token}`,
				},
			}
		);

		const data = response.json();
		return data;
	}

	static async loginAuth() {
		const response = await fetch(`${url}/${version}/login`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user,
				key,
			}),
		});

		const data = await response.json();
		//console.log(data)
		localStorage.setItem('auth', data.data.token);
		return data;
	}

	static async withdaw(client_id: number, amount: number) {
		const token = localStorage.getItem('auth');
		const response = await fetch(
			`${urlTx}/${version}/transfer/withdraw-balance`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					authorization: `bearer ${token}`,
				},
				body: JSON.stringify({
					client_id,
					amount,
				}),
			}
		);
		const data = await response.json();
		return data;
	}
}
