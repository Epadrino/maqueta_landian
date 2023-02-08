import { useState } from 'react';

export const useEstado = (Estado = false) => {
	const [estado, setEstado] = useState(Estado);

	const mostrarOcultar = () => {
		setEstado((prevValue) => !prevValue);
	};

	return {
		estado,
		mostrarOcultar,
	};
};
