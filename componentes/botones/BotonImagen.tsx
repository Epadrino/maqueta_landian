import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Boton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	cursor: pointer;
	position: relative;
	width: auto;
	height: auto;
	padding: 0px;
	border: 0px;
`;

interface Props {
	text?: string;

	onClick?: () => void;
}

export const BotonImagen: FC<PropsWithChildren<Props>> = ({
	text,
	onClick,
	children,
}) => {
	return (
		<Boton onClick={onClick}>
			{children}
			{text}
		</Boton>
	);
};
