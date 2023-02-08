import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Cabecera = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: 9.01vh;
`;

export const Cuerpo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 600px;

	@media ${device.mobileXS} {
		height: 72.84vh;
	}
	@media ${device.tablet} {
		height: 62.84vh;
	}
`;

export const CuerpoUsuario = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media ${device.mobileXS} {
		height: 90.99vh;
	}
	@media ${device.tablet} {
		height: 90.99vh;
	}
`;

export const PieDePagina = styled.div`
	justify-content: center;
	align-items: center;

	width: 100%;
	@media ${device.mobileXS} {
		height: 17.15vh;
	}
	@media ${device.tablet} {
		height: 17.15vh;
	}
`;

export const ImagenTlf = styled.div`
	@media ${device.mobileXS} {
		display: contents;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const ImagenEscritorio = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: contents;
	}
`;
export const TextodeAbajo = styled.p`
	color: ${(props) => props.theme.colors.primary};
	text-align: center;
	@media ${device.mobileXS} {
		width: 300px;
		font-size: 18px;
		line-height: 15px;
	}
	@media ${device.tablet} {
		width: 518px;
		font-size: 25px;
		line-height: 30px;
	}
`;

export const ContenedorDeTexto = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 700;
	font-style: normal;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const ContenedorIdioma = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const Espaciador = styled.div`
	@media ${device.mobileXS} {
		width: 10.57vw;
	}
	@media ${device.tablet} {
	}
`;
