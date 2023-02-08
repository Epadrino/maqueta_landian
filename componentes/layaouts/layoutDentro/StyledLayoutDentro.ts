import styled from 'styled-components';
import { device } from '../../../utils/devices';

export const ContenedorLayout = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Cabezera = styled.div`
	display: grid;
	width: 100%;
	height: 14.64vh;
	align-items: center;

	@media ${device.mobileXS} {
		grid-template-columns: 7vw auto auto 7vw;
		min-height: 50px;
		background: ${(props) => props.theme.backgrounds.primary};
	}
	@media ${device.tablet} {
		grid-template-columns: 6vw auto auto 5vw;
		min-height: 80px;
		background: ${(props) => props.theme.backgrounds.header};
	}
`;

export const Cuerpo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media ${device.mobileXS} {
		grid-template-columns: 7vw auto auto 7vw;
		background: ${(props) => props.theme.backgrounds.primary};
	}
	@media ${device.tablet} {
		grid-template-columns: 6vw auto auto 5vw;
		min-height: 500px;
		background: ${(props) => props.theme.backgrounds.primary};
	}
`;
export const ContenedorDeLogo = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	grid-column: 2;
`;

export const Logo = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		width: 38px;
		height: 38px;
	}
	@media ${device.tablet} {
		width: 78px;
		height: 78px;
	}
`;

export const Titulo = styled.h1`
	display: flex;
	align-items: center;
	font-style: normal;
	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-size: 15px;
		line-height: 15px;
		font-weight: bold;
		margin-left: 1rem;
	}
	@media ${device.tablet} {
		font-size: 25px;
		line-height: 29px;
		font-weight: normal;
		margin-left: 1rem;
	}
`;
export const ContenedorDeMenu = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		justify-content: flex-end;
		grid-column: 3;
	}
	@media ${device.tablet} {
		justify-content: flex-end;
		grid-column: 3;
	}
`;
export const ContenedorMenuEsc = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
	}
`;
export const PiePagina = styled.div`
	width: 100%;
	height: 14.45vh;
	background: ${(props) => props.theme.backgrounds.primary};
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: grid;
		grid-template-columns: 8.95vw 78px 3.47vw 300px auto 200px 8.95vw;
	}
`;

export const Contenedor1 = styled.div`
	display: flex;
	align-items: center;
	grid-column: 2;
`;

export const Contenedor2 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	grid-column: 4;
`;

export const Contenedor3 = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
	flex-direction: column;
	grid-column: 6;
`;

export const ContenedorTextoUnoYDos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ContenedorTextosUno = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const ContenedorTextosDos = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Separador = styled.hr`
	height: 15px;
	color: ${(props) => props.theme.colors.primary};
	margin: 6px;
`;

export const TextoRedes = styled.h2`
	font-family: ${(props) => props.theme.fonts.primary};
	font-style: normal;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
`;

export const ContenedorRedesSociales = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
