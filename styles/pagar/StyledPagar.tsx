import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	width: 100%;
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: none;

	@media ${device.mobileXS} {
		height: 91.36vh;
		overflow: hidden;
		padding: 0px 0px;
		column-gap: 0%;
	}
	@media ${device.tablet} {
		height: 70.91vh;
		overflow: visible;
		column-gap: 2%;
		padding: 0 10px;
	}
	@media ${device.laptop} {
		height: 70.91vh;
		overflow: visible;
		column-gap: 4%;
		padding: 0 20px;
	}
`;

export const Caja = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: none;
	column-gap: 20px;
`;

export const TituloUno = styled.div`
	width: 100%;
	margin: 0;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		grid-row: 1;
		grid-column: 1;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		text-align: center;
	}
	@media ${device.tablet} {
		grid-row: 2;
		grid-column: 2;

		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 32px;
		text-align: left;
	}
`;
export const TituloDos = styled.div`
	display: flex;

	width: 100%;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		grid-row: 5;
		grid-column: 1;

		justify-content: center;
		align-items: center;
		height: 50px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 700;
		font-size: 15px;

		text-align: center;
	}
	@media ${device.tablet} {
		grid-row: 5;
		grid-column: 2;

		justify-content: flex-start;
		align-items: center;

		paddin: 11px 0;

		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 32px;
	}
`;

export const Parrafo = styled.p`
	display: flex;
	width: 100%;
	margin: 0px;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		grid-row: 2;
		grid-column: 1;
		/* max-width: 250px; */
		max-width: 250px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		text-align: center;
		line-height: 15px;
	}
	@media ${device.tablet} {
		grid-row: 3;
		grid-column: 2;
		max-width: 550px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 500;
		font-size: 15px;
		text-align: left;
	}
	@media ${device.laptop} {
		grid-row: 3;
		grid-column: 2;
		max-width: 550px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		text-align: left;
	}
`;

export const ContenedorItem = styled.div`
	display: flex;
	flex-direction: column;
	width: cal(100%-1.2rem);

	margin: 0;
	ul {
		font-family: ${(props) => props.theme.fonts.primary};
		font-style: normal;
		font-weight: 500;
		color: ${(props) => props.theme.colors.primary};

		font-size: 20px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: left;

		@media ${device.mobileXS} {
			font-size: 12px;
		}
		@media ${device.tablet} {
			font-size: 15px;
		}
		@media ${device.laptop} {
			font-size: 20px;
		}
		li {
		}
	}
	@media ${device.mobileXS} {
		grid-row: 4;
		grid-column: 1;
		justify-content: center;
		max-width: 244px;
		height: 100%;
	}
	@media ${device.tablet} {
		grid-row: 4;
		grid-column: 2;
		justify-content: center;
		align-items: center;
		max-width: 550px;
		height: 100%;
	}
`;
export const Item = styled.li`
	display: flex;
	width: 100%;
	margin: 0px;
	list-style-type: disc;
`;

export const ContenedorDeBotones = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		grid-row: 6;
		justify-content: center;
		align-items: center;
		flex-direction: row-reverse;
		width: 100%;
		height: 50px;
		gap: 10px;
		margin-bottom: 10px;
	}
	@media ${device.tablet} {
		grid-row: 6;
		grid-column: 2;
		justify-content: start;
		align-items: flex-end;
		flex-direction: row;
		width: 100%;
		height: 60px;
		gap: 20px;
		margin-bottom: 0px;
	}
`;

export const ContenedorDeBotones2 = styled.div`
	display: flex;
	@media ${device.mobileXS} {
		grid-row: 7;
		grid-column: 1;

		justify-content: center;
		align-items: center;
		flex-direction: row-reverse;

		width: 360px;
		height: 120px;
		gap: 10px;

		border-radius: 50px 50px 0px 0px;
		background: ${(props) => props.theme.backgrounds.header};
	}
	@media ${device.tablet} {
		grid-row: 7;
		grid-column: 2;

		justify-content: start;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;

		width: 100%;
		height: 70px;
		gap: 10px;

		border-radius: 0px;
		background: none;
	}
	@media ${device.laptop} {
		grid-row: 7;
		grid-column: 2;

		justify-content: start;
		align-items: flex-end;
		flex-direction: row;

		width: 100%;
		height: 80px;
		gap: 20px;

		border-radius: 0px;
		background: none;
	}
`;

export const ContenedorDeMuestra = styled.div`
	background: ${(props) => props.theme.backgrounds.producs};
	justify-content: center;
	align-items: center;
	border: 2px solid transparent;
	border-radius: 10px;

	&:hover {
		border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	}

	position: relative;
	width: 514px;
	::after {
		content: '';
		display: block;
		margin-bottom: 100%;
	}
	@media ${device.mobileXS} {
		max-height: 244px;
		max-width: 244px;
	}
	@media ${device.tablet} {
		grid-row: 1 / spam 7;
		grid-column: 1;
		max-width: 370px;
		max-height: 370px;
	}
	@media ${device.laptop} {
		grid-row: 2 / spam 7;
		grid-column: 1;
		max-width: 514px;
		max-height: 513px;
	}
`;

export const IconTether = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		width: 26px;
		height: 26px;
	}
	@media ${device.tablet} {
		width: 35px;
		height: 35px;
	}
`;

export const IconBusd = styled.div`
	position: relative;
	@media ${device.mobileXS} {
		width: 26px;
		height: 26px;
	}
	@media ${device.tablet} {
		width: 35px;
		height: 35px;
	}
`;
