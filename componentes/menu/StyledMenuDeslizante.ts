import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ContenedorMenuTlf = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${device.mobileXS} {
		display: contents;
		display: flex;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const MenuTelefono = styled.div`
	z-index: 100;
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	width: 186px;
	background: black;
`;

export const EstiloMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 45px;
	padding-left: 20px;
	padding-right: 10px;
`;
