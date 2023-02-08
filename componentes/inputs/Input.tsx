import { FC } from 'react';
import { Contenedor, ContenedorInput } from './StyledInputs';

interface Props {
	type: string;
	name: string;
	placeholder: string;
	onKeyDown: () => void;
	onChange: () => void;
}
export const Input: FC<Props> = ({
	type,
	name,
	placeholder,
	onKeyDown,
	onChange,
}) => {
	return (
		<Contenedor>
			<ContenedorInput
				type={type}
				name={name}
				placeholder={placeholder}
				onKeyDown={onKeyDown}
				onChange={onChange}
			/>
		</Contenedor>
	);
};
