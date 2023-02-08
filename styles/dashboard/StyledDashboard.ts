import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 90%;

	gap: 10%;
`;
export const ContenedorReferidos = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	@media ${device.mobileXS} {
		height: 180px;
	}
	@media ${device.tablet} {
		height: 200px;
	}
	@media ${device.laptop} {
		height: 398px;
	}
`;

export const ContenedorCodigo = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const CodigoQR = styled.div`
	z-index: 3;
	width: 220px;

	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};

	@media ${device.mobileXS} {
		max-width: 100px;
	}
	@media ${device.tablet} {
		max-width: 100px;
	}
	@media ${device.laptop} {
		max-width: 220px;
	}
`;
export const ContenedorFondo = styled.div`
	z-index: 0;
`;
export const Fondozul = styled.div`
	position: absolute;
	width: 220px;
	z-index: 2;

	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.secondary};
	@media ${device.mobileXS} {
		top: 36px;
		left: 3px;
		max-width: 95px;
	}
	@media ${device.tablet} {
		top: 32px;
		left: 2px;
		max-width: 95px;
	}
	@media ${device.laptop} {
		top: 36px;
		left: 2px;
		max-width: 215px;
	}
`;
export const FondoBlanco = styled.div`
	position: absolute;
	z-index: 3;
	width: 220px;

	::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	border-radius: 10px;
	background: ${(props) => props.theme.colors.primary};
	@media ${device.mobileXS} {
		max-width: 95px;
		top: 30px;
		left: 3px;
	}
	@media ${device.tablet} {
		max-width: 95px;
		top: 28px;
		left: 2px;
	}
	@media ${device.laptop} {
		top: 30px;
		left: 2px;
		max-width: 215px;
	}
`;

export const ContenedorReferidosTexto = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 450px;
`;
export const TextoTitulo = styled.h1`
	margin: 0;
	padding: 10px 0px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 20px;
	}
	@media ${device.tablet} {
		font-size: 25px;
	}
	@media ${device.laptop} {
		font-size: 32px;
	}
`;
export const TextoParrafo = styled.h2`
	margin: 0;

	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		padding: 10px 0px;
		font-size: 10px;
	}
	@media ${device.tablet} {
		padding: 15px 0px;
		font-size: 15px;
	}
	@media ${device.laptop} {
		padding: 20px 0px;
		font-size: 20px;
	}
`;

export const ContenedorInput = styled.div`
	width: 100%;
	position: relative;
`;
export const TextoInput = styled.input`
	width: 100%;
	max-width: 450px;
	max-height: 46px;
	border: 0;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};
	@media ${device.mobileXS} {
		font-size: 20px;
		height: 21px;
	}
	@media ${device.tablet} {
		font-size: 20px;
		height: 30px;
	}
	@media ${device.laptop} {
		font-size: 32px;
		height: 46px;
	}
`;

export const TextoInputBoton = styled.button`
	position: absolute;

	right: 0px;
	top: 0px;

	background: ${(props) => props.theme.backgrounds.secondary};

	font-weight: 700;

	color: ${(Props) => Props.theme.colors.tertiary};

	@media ${device.mobileXS} {
		width: 47px;
		height: 21px;
		font-size: 10px;
		border-radius: 1px;
	}
	@media ${device.tablet} {
		width: 81px;
		font-size: 20px;
		height: 32px;
		border-radius: 10px;
	}
	@media ${device.laptop} {
		border-radius: 10px;
		height: 46px;
		width: 91px;
		font-size: 32px;
	}
`;
export const ContenedorDatos = styled.div`
	display: flex;
	justify-content: center;
	@media ${device.mobileXS} {
		flex-direction: column;
		padding-bottom: 0px;
		gap: 10px;
	}
	@media ${device.tablet} {
		padding-bottom: 46px;
		flex-direction: row;
		gap: 20px;
	}
`;
export const ContenedorDatosDentro = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;

	@media ${device.mobileXS} {
		flex-direction: column;
		gap: 10px;
	}

	@media ${device.desktopL} {
		flex-direction: row;
		gap: 20px;
	}
`;

export const ContenedorDato = styled.div`
	display: flex;
	align-items: center;
	justify-content: space;

	gap: 20px;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};

	position: relative;
	width: 100%;
	::after {
		content: '';
		padding-bottom: 22%;
	}
`;

export const ContenedorTextoDatos = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0px 20px;
	width: 50%;
`;

export const TituloDatos = styled.h1`
	font-weight: 700;
	font-size: 20px;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-size: 18px;
	}
	@media ${device.laptop} {
		font-size: 24px;
	}
`;
export const SubTituloDatos = styled.h2`
	font-weight: 400;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 14px;
	}
	@media ${device.tablet} {
		font-size: 14px;
	}
	@media ${device.laptop} {
		font-size: 19px;
	}
`;
export const ContenedorTextoMonto = styled.div`
	display: flex;
	justify-content: center;
	width: 50%;
`;
export const MontoDatos = styled.h1`
	font-weight: 700;
	font-size: 50px;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: ${(props) => props.theme.fonts.primary};
	@media ${device.mobileXS} {
		font-size: 24px;
	}
	@media ${device.tablet} {
		font-size: 28px;
	}
	@media ${device.laptop} {
		font-size: 48px;
	}
`;
export const ContenedorListas = styled.div`
	display: flex;
	width: 100%;
	gap: 20px;
`;
export const ContenedorListaTlf = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};
`;
export const ContenedorListaEscritorio = styled.div`
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background: ${(props) => props.theme.backgrounds.header};
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: flex;
	}
`;
export const TituloLista = styled.h1`
	font-weight: 700;
	font-size: 25px;
	margin: 0;
	padding: 25px;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
`;
export const Lista = styled.ul`
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
`;
export const ItemLista = styled.li`
	font-size: 15px;
	line-height: 20px;
	color: ${(props) => props.theme.colors.primary};
	font-weight: ${(props) => props.theme.fonts.primary};
`;

export const ContenedorListaBoton = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: block;
	}
`;

export const BotonLista = styled.button`
	width: 100%;
	height: 60px;
	font-weight: 700;
	font-size: 25px;
	border-radius: 0 0 10px 10px;
	color: ${(props) => props.theme.colors.tertiary};
	background: ${(props) => props.theme.backgrounds.secondary};
`;

export const ContenedorBotonesListas = styled.div`
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 20px 0;
	gap: 20px;
	@media ${device.mobileXS} {
		display: flex;
	}
	@media ${device.tablet} {
		display: none;
	}
`;
