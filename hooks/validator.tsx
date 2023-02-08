import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Validator = () => {
	const router = useRouter();
	const { wallet, sponsor } = router.query;
	const [statusUserName, setStatusUserName] = useState<boolean>(false);
	const [inputs, setInputs] = useState({
		username: '',
		wallet: '',
		email: '',
		reference_username: '',
	});

	//Setea el campo si no cumple la validación.
	const onKeyPressed = (e: any) => {
		const patron = /[A-Za-z0-9]/;
		const tecla_final = String.fromCharCode(e.keyCode);
		const test = patron.test(tecla_final);
		if (!test) {
			setStatusUserName(test);
			toast.error(
				'El usuario no puede contener numeros, mayúsculas, espacios y caracteres .!/.',
				{
					toastId: 'errorUser',
				}
			);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		//console.log(value);
		if (typeof wallet == 'string' && typeof sponsor == 'string') {
			const regex = new RegExp('[a-z0-9]', 'g');
			if (name == 'username') {
				let myArray = regex.test(value);
				setStatusUserName(myArray);
				if (!myArray) {
					toast.error(
						'El usuario no puede contener mayúsculas, espacios y caracteres .!/.'
					);
				}
			}
			setInputs({
				...inputs,
				[name]: value,
				wallet,
				reference_username: sponsor.toLowerCase(),
			});
		}
	};

	return {
		onKeyPressed,
		handleChange,
		statusUserName,
		inputs,
	};
};

export default Validator;
