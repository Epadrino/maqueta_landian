import { SellPackage, DataPg } from '../../interfaces/packages.interface';
import { checkFunds } from '../ethers';

const url: string = process.env.NEXT_PUBLIC_BASE_API_URL || '';
const version: string = process.env.NEXT_PUBLIC_BASE_API_VERSION || '';

export class PackageService {
	static async getPackages() {
		const token = localStorage.getItem('auth');
		const response = await fetch(`${url}/${version}/plans`, {
			method: 'GET',
			headers: {
				authorization: `bearer ${token}`,
			},
		});
		const { lands, mega_project_tokens, meta_tokens } = await checkFunds();
		const data = await response.json();
		//console.log(lands, mega_project_tokens, meta_tokens)
		const packages = data.data.map((pkg: DataPg) => {
			if (
				pkg.digital_assets < meta_tokens &&
				pkg.megaproject_length < mega_project_tokens &&
				pkg.lndas < lands
			) {
				return {
					...pkg,
					soldout: false,
				};
			} else
				return {
					...pkg,
					soldout: true,
				};
		});
		return packages;
	}

	static async posBonus(dataBonus: {
		price: number;
		code: string;
		plan_id: number;
	}) {
		// const dataBonus = {
		//     price: price,
		//     code: code,
		//     plan_id: plan_id
		// }
		const token = localStorage.getItem('auth');
		console.log('HOLA MUNDO', dataBonus);
		try {
			//console.log(JSON.stringify(dataBonus))
			const response = await fetch(`${url}/${version}/bonus/validate`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					authorization: `bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataBonus),
			});
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	static async buyPackageAPI(payload: SellPackage) {
		const token = localStorage.getItem('auth');
		console.log('payload', payload);
		const response = await fetch(`${url}/${version}/buy-plan`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				authorization: `bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		const data = response.json();
		return data;
	}

	// static async saveOrder(payload: any) {
	//     const response = await fetch(`${url}/${version}/orders`, {
	//         method: "POST", headers: {
	//             'Accept': 'application/json',
	//             'Content-Type': 'application/json'
	//         }, "body": JSON.stringify(payload)
	//     });
	//     const data = response.json();
	//     return data;
	// }
}
