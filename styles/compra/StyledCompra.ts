import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: grid;
	column-gap: 2.91vw;

	@media ${device.mobileXS} {
		height: 85vh;
		align-items: center;
		justify-content: center;
		width: 75%;
	}
	@media ${device.tablet} {
		height: 70.91vh;
		width: 95%;
		align-items: center;
		justify-content: center;
	}
`;
export const ContenedorProducto = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		align-items: center;
		justify-content: center;

		grid-row: 2;
	}
	@media ${device.tablet} {
		align-items: center;
		justify-content: center;
		grid-column: 1;
		grid-row: 1 / sapm 3;
	}
`;
export const Producto = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.backgrounds.header};
	border: 1px solid #ffffff;
	border-radius: 10px;
	width: 500px;
	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	@media ${device.mobileXS} {
		max-width: 244px;
	}
	@media ${device.tablet} {
		max-width: 450px;
	}
	@media ${device.laptop} {
		max-width: 500px;
	}
`;

export const ContenedorCompra = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	@media ${device.mobileXS} {
		justify-content: flex-end;
	}
	@media ${device.tablet} {
	}
`;

export const TituloCompra = styled.h1`
	margin: 0;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		text-align: center;
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		text-align: left;
		font-weight: 700;
		font-size: 32px;
	}
`;
export const DescripcionCompra = styled.p`
	max-width: 350px;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		margin: 10px 0;
		text-align: center;
		font-weight: 700;
		font-size: 12px;
	}
	@media ${device.tablet} {
		margin: 0px 0;
		text-align: left;
		font-weight: 700;
		font-size: 15px;
	}
`;
export const ContenedorDetalles = styled.div`
	@media ${device.mobileXS} {
		grid-row: 3;
	}
	@media ${device.tablet} {
		grid-column: 2;
		grid-row: 2;
	}
`;
export const TituloDetalles = styled.h1`
	margin: 0;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		display: block;
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		display: inline-block;
		font-weight: 700;
		font-size: 25px;
	}
`;

export const Espaciador = styled.hr`
	width: 1px;
	height: 17px;
	margin: 0px 5px;
	background: ${(props) => props.theme.colors.primary};
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: inline-block;
	}
`;
export const PrecioDetalles = styled.h1`
	margin: 0;
	display: inline-block;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		display: block;
		font-weight: 700;
		font-size: 20px;
	}
	@media ${device.tablet} {
		display: inline-block;
		font-weight: 700;
		font-size: 25px;
	}
`;

export const DescripcionDetalles = styled.p`
	margin: 10px 0;
	max-width: 350px;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-weight: 700;
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-weight: 700;
		font-size: 15px;
	}
`;
export const ListaDetalles = styled.ul``;
export const ItensDetalles = styled.li`
	padding: 0;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-weight: 700;
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-weight: 700;
		font-size: 15px;
	}
`;
export const ContenedorBoton = styled.div`
	display: flex;
	width: 100%;
	height: 100%;

	@media ${device.mobileXS} {
		justify-content: center;
		grid-row: 4;
	}
	@media ${device.tablet} {
		justify-content: flex-start;
		grid-column: 2;
		grid-row: 3;
	}
`;
