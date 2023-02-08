import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedorCuerpo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

	@media ${device.mobileXS} {
		height: 90.36vh;
	}
	@media ${device.tablet} {
		height: 60.91vh;
	}
`;

export const ContenedorUno = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 20px;
	height: 100%;
`;
export const ContenedorImangen = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		div {
			width: 159px;
			height: 161px;
		}
	}
	@media ${device.tablet} {
		div {
			width: 348px;
			height: 351px;
		}
	}
`;

export const ContenedorDos = styled.div`
	display: flex;
	flex-direction: column;

	height: 100%;

	@media ${device.mobileXS} {
		row-gap: 20px;
		justify-content: start;
	}
	@media ${device.tablet} {
		row-gap: 45px;
		justify-content: center;
		padding-bottom: 70px;
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	justify-content: center;

	@media ${device.mobileXS} {
		gap: 8px;
	}
	@media ${device.tablet} {
		gap: 15px;
	}
`;

export const Contenedor = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	position: relative;
`;

export const ContenedorIcon = styled.div`
	@media ${device.mobileXS} {
		position: absolute;
		left: 85.5%;
		top: 27%;
		z-index: 1;
		div {
			width: 21px;
			height: 21px;
		}
	}
	@media ${device.tablet} {
		position: absolute;
		left: 88%;
		top: 15%;
		z-index: 1;
		div {
			width: 32px;
			height: 32px;
		}
	}
`;
