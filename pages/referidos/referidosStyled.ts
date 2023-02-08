import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;

	@media ${device.mobileXS} {
		justify-content: flex-start;
		grid-template-columns: 7.5vw 1fr 7.5vw;
		height: 85.36vh;
		width: 80%;
	}
	@media ${device.tablet} {
		align-items: center;
		justify-content: center;
		grid-template-columns: 6vw 30vw 1fr 6vw;
		height: 70.91vh;
		min-height: 570px;
	}
`;
export const ContenedorRuta = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;

	width: 100%;

	@media ${device.mobileXS} {
		padding: 10px 0;
	}
	@media ${device.tablet} {
		padding: 30px 0;
	}
`;

export const FondoFlecha = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.backgrounds.secondary};
	border-radius: 10px;
	@media ${device.mobileXS} {
		width: 30px;
		height: 30px;
	}
	@media ${device.tablet} {
		width: 40px;
		height: 40px;
	}
`;
export const Titulo = styled.div`
	padding-left: 20px;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 32px;
	}
`;
export const ContenedorTabla = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const BotonLista = styled.div``;

export const ContenedorListaBoton = styled.div`
	justify-content: right;
	display: flex;
	align-items: center;
	width: 100%;
	height: 50px;

	@media ${device.mobileXS} {
		padding: 10px 0;
	}
	@media ${device.tablet} {
		padding: 20px 0;
	}
`;

export const Flecha = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		margin: 0 5px;
		width: 15.52px;
		height: 31.05px;
	}
	@media ${device.tablet} {
		margin: 0 10px;
		width: 15.52px;
		height: 31.05px;
	}
`;
