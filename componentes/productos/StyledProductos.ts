import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
export const ContenedorDeProductos = styled.div`
	display: flex;
	justify-content: center;
	grid-gap: 10px;
	width: 100%;
	height: 100%;

	@media ${device.mobileXS} {
		flex-direction: column;
	}

	@media ${device.tablet} {
		flex-direction: row;
	}
`;
export const ContenedorDeProductos1 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;

	height: 100%;

	@media ${device.mobileXS} {
	}

	@media ${device.tablet} {
		justify-items: center;
	}
`;

export const ContenedorDeProductos2 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	height: 100%;

	@media ${device.mobileXS} {
		flex-direction: row;
	}

	@media ${device.tablet} {
		flex-direction: column;
	}
`;

export const ContenedorBotonArriba = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
		justify-content: center;
	}
`;
export const ContenedorBotonAbajo = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
		justify-content: center;
	}
`;

export const Producto1 = styled.div`
	background: ${(props) => props.theme.backgrounds.producs};
	border: 2px solid transparent;
	border-radius: 10px;

	&:hover {
		border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	}

	position: relative;
	width: 465px;
	:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}

	@media ${device.mobileXS} {
		max-width: 310px;
		max-height: 310px;
	}
	@media ${device.tablet} {
		max-width: 300px;
		max-height: 300px;
	}
	@media ${device.laptop} {
		max-width: 400px;
		max-height: 400px;
	}
	@media ${device.laptopL} {
		max-width: 465px;
		max-height: 465px;
	}
`;

export const Producto2 = styled.div`
	border-radius: 10px;

	background: ${(props) => props.theme.backgrounds.producs};

	position: relative;
	width: 145px;

	:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	@media ${device.mobileXS} {
		min-width: 117px;
		min-height: 117px;
		max-width: 117px;
		max-height: 117px;
		border: 2px solid transparent;
		&:hover {
			border: 2px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
	@media ${device.tablet} {
		min-width: 85px;
		min-height: 85px;
		max-width: 92px;
		max-height: 92px;
		border: 1px solid transparent;
		&:hover {
			border: 1px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
	@media ${device.laptop} {
		min-width: 117px;
		min-height: 117px;
		max-width: 125px;
		max-height: 125px;
		border: 1px solid transparent;
		&:hover {
			border: 1px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
	@media ${device.laptopL} {
		min-width: 117px;
		min-height: 117px;
		max-width: 145px;
		max-height: 145px;
		border: 1px solid transparent;
		&:hover {
			border: 1px solid ${(props) => props.theme.backgrounds.secondary};
		}
	}
`;

export const Icon = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		width: 46px;
		height: 46px;
	}
	@media ${device.tablet} {
		width: 46px;
		height: 46px;
	}
`;
