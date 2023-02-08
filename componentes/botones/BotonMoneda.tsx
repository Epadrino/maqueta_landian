import styled from 'styled-components';
import { device } from '../../utils/devices';
import { FC, PropsWithChildren } from 'react';

const Boton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	text-align: left;
	background: transparent;
	color: ${(props) => props.theme.colors.primary};
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.colors.primary};

	&:hover {
		border: 1px solid ${(props) => props.theme.backgrounds.tertiary};
		background: ${(props) => props.theme.backgrounds.secondary};
	}

	@media ${device.mobileXS} {
		width: 105px;
		height: 38px;
		font-size: 12px;
		line-height: 14px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 15px;
	}
	@media ${device.tablet} {
		width: 143px;
		height: 51px;
		font-size: 24px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 20px;
		text-align: center;
		padding: 0px;
	}
`;
interface Props {
	text?: string;
	onClick?: () => void;
}

export const BotonMoneda: FC<PropsWithChildren<Props>> = ({
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
