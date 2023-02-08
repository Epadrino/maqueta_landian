import styled from 'styled-components';

import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	top: 0;
	left: 0;
	padding: 0;
	right: 0;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	background: rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(5px);

	@media ${device.mobileXS} {
	}

	@media ${device.tablet} {
	}
`;
export const FondoBoton = styled.div`
	background: ${(props) => props.theme.backgrounds.secondary};
	border-radius: 50px;
	padding: 5px;
`;

export const Caja = styled.div`
	display: grid;
	justify-content: center;
	align-content: center;
	align-items: start;
	justify-items: center;
	position: relative;
	background: ${(props) => props.theme.backgrounds.primary};
	border-radius: 10px;
	@media ${device.mobileXS} {
		row-gap: 0px;
		column-gap: 20px;
		grid-template-columns: 10px auto 10px;
		width: 309px;
		height: 663px;
	}

	@media ${device.tablet} {
		gap: 20px;
		grid-template-columns: 20px auto auto auto 20px;
		grid-template-rows: 20px auto auto auto 20px;
		width: 970px;
		height: 595px;
	}
`;
export const CajaBotonSalir = styled.div`
	position: absolute;
	top: 20px;
	right: 30px;
`;
export const Producto = styled.div`
	background: ${(props) => props.theme.backgrounds.header};
	border-radius: 10px;

	@media ${device.mobileXS} {
		grid-column: 2;
		grid-row: 3;
		position: relative;

		width: 251px;
		position: relative;

		::after {
			content: '';
			display: block;
			padding-bottom: 100%;
		}
	}
	@media ${device.tablet} {
		grid-column: 2/4;
		grid-row: 2 / span 2;
		width: 394px;
		position: relative;
		::after {
			content: '';
			display: block;
			padding-bottom: 100%;
		}
	}
`;
export const Precio = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	h1 {
		width: 100%;
		font-family: ${(props) => props.theme.fonts.primary};
		margin: 0;
		font-style: normal;
		font-weight: 700;
	}
	@media ${device.mobileXS} {
		grid-column: 2;
		grid-row: 2;
		h1 {
			line-height: 24px;
			font-size: 20px;
			text-align: left;
			padding-bottom: 10px;
		}
	}

	@media ${device.tablet} {
		grid-column: 2;
		grid-row: 4;
		h1 {
			line-height: 42px;
			font-size: 35px;
			text-align: center;
			padding-bottom: 0px;
		}
	}
`;
export const TituloDeTarjeta = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	h1 {
		font-family: ${(props) => props.theme.fonts.primary};
		margin: 0;
		font-style: normal;
		font-weight: 700;
		text-align: left;
	}
	@media ${device.mobileXS} {
		grid-column: 2;
		grid-row: 1;
		h1 {
			line-height: 24px;
			font-size: 20px;
		}
	}

	@media ${device.tablet} {
		grid-column: 4;
		grid-row: 2;
		h1 {
			line-height: 48px;
			font-size: 32px;
		}
	}
`;
export const Descripcion = styled.div`
	width: 100%;
	ul {
		color: white;
		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 700;
		max-width: 340px;
		width: 100%;
		padding: 0px;
		li {
			list-style-type: none;
			ul {
				li {
					margin-left: 40px;
					list-style-type: disc;
				}
			}
		}
	}

	@media ${device.mobileXS} {
		grid-column: 2;
		grid-row: 4;
		ul {
			font-size: 14px;
			line-height: 16px;
		}
	}

	@media ${device.tablet} {
		grid-column: 4;
		grid-row: 3;

		ul {
			font-size: 15px;
			line-height: 18px;
		}
	}
`;

export const CajaBotonAccion = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
		grid-column: 2;
		grid-row: 5;
		margin: 5px 0px;
	}

	@media ${device.tablet} {
		grid-column: 3;
		grid-row: 4;
		margin: 0px 0px;
	}
`;

export const Icon = styled.div`
	width: 20px;
	height: 20px;
`;
