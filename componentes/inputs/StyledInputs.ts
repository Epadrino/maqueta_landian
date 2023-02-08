import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	position: relative;
`;

export const ContenedorInput = styled.input`
	z-index: 2;
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 400;

	background: rgba(138, 138, 138, 0.5);
	border-radius: 50px;
	border: 2px solid transparent;

	text-align: center;

	&:focus {
		border: 2px solid ${(props) => props.theme.colors.secondary};
		outline: none;
	}
	::placeholder {
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${device.mobileXS} {
		height: 39px;
		width: 277px;
		font-size: 12px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		height: 6.5vh;
		width: 517px;
		font-size: 20px;
		line-height: 24px;
	}
`;
