import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
export const ContenedorUno = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 0px;

	@media ${device.mobileXS} {
		div {
			position: relative;
			width: 159px;
			height: 161px;
		}
	}
	@media ${device.tablet} {
		div {
			position: relative;
			width: 296px;
			height: 299px;
		}
	}
`;
export const ContenedorImagen = styled.div``;
export const TituloWalled = styled.h1`
	display: flex;
	justify-content: center;
	text-align: center;

	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
		margin-top: 28;
		margin-bottom: 29;
	}
	@media ${device.tablet} {
		font-weight: 400;
		font-size: 32px;
		line-height: 41px;
		margin-top: 27;
		margin-bottom: 80;
	}
`;

export const ContenedorBoton = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ContenedorTexto = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${device.mobileXS} {
		width: 100%;
		position: relative;
		::after {
			content: '';
			display: block;
			padding-bottom: 30%;
		}
	}
	@media ${device.tablet} {
		width: 100%;
		position: relative;
		::after {
			content: '';
			display: block;
			padding-bottom: 10%;
		}
	}
`;

export const Metamask = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		width: 30px;
		height: 30px;
	}
	@media ${device.tablet} {
		width: 45px;
		height: 45px;
	}
`;

export const WalletConnect = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		width: 31px;
		height: 31px;
	}
	@media ${device.tablet} {
		width: 51px;
		height: 51px;
	}
`;
