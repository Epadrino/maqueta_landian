import styled from 'styled-components';
import { device } from '../../../utils/devices';

export const Contenedor = styled.div`
	width: 100%;

	@media ${device.mobileXS} {
		overflow-x: scroll;
		::-webkit-scrollbar {
			height: 5px;

			background-color: ${(props) => props.theme.backgrounds.header};
		}
		::-webkit-scrollbar-thumb {
			background-color: ${(props) => props.theme.backgrounds.secondary};
			border-radius: 5px;
		}
		padding-bottom: 0px;
		margin: 0;
	}
	@media ${device.tablet} {
		overflow: hidden;
		padding-bottom: 30px;
	}
`;

export const Tabla = styled.table`
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 300;
	text-align: left;

	@media ${device.mobileXS} {
		width: 600px;
		font-size: 15px;
	}
	@media ${device.tablet} {
		width: 100%;
		font-size: 15px;
	}
`;
export const TablaCabezera = styled.thead``;
export const TablaCabezeraColumna = styled.tr``;
export const TablaCabezeraColumnaItem = styled.th`
	padding: 0 0 0 25px;
`;
export const TablaCuerpo = styled.tbody``;
export const TablaCuerpoColumna = styled.tr`
	:nth-child(odd) {
		background: ${(props) => props.theme.backgrounds.primary};
	}
`;
export const TablaCuerpoColumnaItem = styled.th`
	padding: 0 0 0 25px;
`;
