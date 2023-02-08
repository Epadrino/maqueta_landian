const url: string = process.env.NEXT_PUBLIC_BASE_API_URL || '';
const version: string = process.env.NEXT_PUBLIC_BASE_API_VERSION || '';

export class AdminService {
	static async updateWalletLander(wallet: string) {
		const token = localStorage.getItem('auth');
		const response = await fetch(`${url}/${version}/update/wallet-lands`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				authorization: `bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ wallet }),
		});
		const data = response.json();
		return data;
	}

	static async getLander() {
		const response = await fetch(`${url}/${version}/verify-wallet`);
		const data = response.json();
		return data;
	}

	static async generateXLS(wallet: string) {
		const response = await fetch(
			`${url}/${version}/report/total/${wallet}`
		);
		const data = response.json();
		return data;
	}
}
