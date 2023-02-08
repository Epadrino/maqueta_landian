import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedorBotonX = styled.div`
	@media ${device.mobileXS} {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		margin-bottom: 30px;
	}
	@media ${device.tablet} {
		display: none;
	}
`;
export const ContenedorDeEnlaces = styled.div`
	white-space: nowrap;
	@media ${device.mobileXS} {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		width: 100%;
	}
`;

export const Separador = styled.hr`
	@media ${device.mobileXS} {
		width: 100%;
		height: 0px;
		color: #424242;
		margin-top: 34px;
		margin-bottom: 37px;
	}
	@media ${device.tablet} {
		width: 0px;
		height: 53px;
		color: #424242;
		margin: 0px 2rem;
	}
`;

export const ContenedorDeBoton = styled.div`
	@media ${device.mobileXS} {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 18px;
	}
	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}
`;

export const ContenedorSalir = styled.span`
	display: flex;
	align-items: center;
	justify-content: start;
`;
export const Texto = styled.h3`
	cursor: pointer;
	justify-content: center;

	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 700;
	text-align: center;
	letter-spacing: 0px;

	font-size: 14px;
	line-height: 14.95px;
	padding-left: 5px;
	@media ${device.mobileXS} {
		display: flex;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const LogIng = styled.div`
	@media ${device.mobileXS} {
		width: 25px;
		height: 25px;
	}
	@media ${device.tablet} {
		width: 33px;
		height: 33px;
	}
`;
