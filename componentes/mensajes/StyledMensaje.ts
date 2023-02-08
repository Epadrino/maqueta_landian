import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div<{ active: boolean }>`
	display: ${({ active }) => (active === true ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100vw;
	height: 100vh;
	background: ${(props) => props.theme.backgrounds.primary};
`;
export const ContenedorMensaje = styled.div`
	border: 4px solid ${(props) => props.theme.backgrounds.secondary};
	background: ${(props) => props.theme.backgrounds.primary};

	@media ${device.mobileXS} {
		width: 300px;
		height: 400px;
	}
	@media ${device.tablet} {
		width: 500px;
		height: 600px;
	}
`;
export const Caja = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
export const MensajeUno = styled.p`
	text-align: center;
	font-style: normal;
	font-weight: 700;

	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.primary};
	@media ${device.mobileXS} {
		font-size: 15px;
		line-height: 20px;
	}
	@media ${device.tablet} {
		font-size: 25px;
		line-height: 30px;
	}
`;

export const MensajeDos = styled.p`
	text-align: center;
	font-style: normal;
	font-weight: 400;

	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.primary};
	@media ${device.mobileXS} {
		font-size: 15px;
		line-height: 20px;
	}
	@media ${device.tablet} {
		font-size: 25px;
		line-height: 30px;
	}
`;
