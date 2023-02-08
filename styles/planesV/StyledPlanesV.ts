import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media ${device.mobileXS} {
		min-height: 570px;
		height: 85.36vh;
	}
	@media ${device.tablet} {
		min-height: 530px;
		height: 70.91vh;
	}
`;
export const Caja = styled.div`
	display: grid;
	align-items: center;
	width: 100%;
	height: 100%;

	@media ${device.mobileXS} {
		grid-template-columns: 7.5vw auto 7.5vw;
	}
	@media ${device.tablet} {
		grid-template-columns: 6vw 30% auto 6vw;
		grid-template-rows: 20px 1fr 1fr 20px;
	}
	@media ${device.laptopL} {
		grid-template-columns: 6vw 44vw 44vw 6vw;
		grid-template-rows: 20px 1fr 1fr 20px;
	}
`;

export const ContenedorIzq = styled.div`
	display: flex;
	width: 100%;
	height: 100%;

	@media ${device.mobileXS} {
		justify-content: center;
		align-items: center;
		grid-row: 1;
		grid-column: 2;
	}
	@media ${device.tablet} {
		align-items: flex-end;
		justify-content: center;
		grid-row: 2;
		grid-column: 2;
	}
	@media ${device.tablet} {
		align-items: flex-end;
		justify-content: center;
		grid-row: 2;
		grid-column: 2;
	}
`;

export const ContenedorDeTexto = styled.div`
	display: flex;
	flex-direction: column;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const Titulo = styled.div`
	width: 100%;
	height: 100%;
	font-style: normal;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 20px;
		text-align: center;
	}
	@media ${device.tablet} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 25px;
		text-align: left;
	}
	@media ${device.laptop} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 32px;
		text-align: left;
	}
`;

export const Parrafo = styled.div`
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
		width: 100%;
		margin-top: 20px;
		max-width: 430px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-size: 15px;
		color: ${(props) => props.theme.colors.primary};
	}
	@media ${device.laptop} {
		display: flex;
		width: 100%;
		margin-top: 20px;
		max-width: 430px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-size: 20px;
		color: ${(props) => props.theme.colors.primary};
	}
`;
export const ContenedorDeProductos = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
		min-width: 0px;
		grid-row: 2;
		grid-column: 1/4;
	}
	@media ${device.tablet} {
		min-width: 0px;
		grid-column: 3;
		grid-row: 2 / 4;
	}
	@media ${device.laptop} {
		min-width: 550px;
		grid-column: 3;
		grid-row: 2 / 4;
	}
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 100%;

	@media ${device.mobileXS} {
		justify-content: center;
		flex-direction: row-reverse;
		align-content: center;

		grid-row: 3;
		grid-column: 1 / 4;

		gap: 10px;
	}
	@media ${device.tablet} {
		justify-content: start;
		align-content: flex-start;
		flex-wrap: wrap;
		padding-top: 20px;

		grid-row: 3;
		grid-column: 2;

		gap: 10px;
	}
	@media ${device.laptop} {
		justify-content: center;
		align-content: center;
		flex-wrap: nowrap;

		grid-row: 3;
		grid-column: 2;

		gap: 20px;
	}
`;
