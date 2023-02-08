import styled from 'styled-components';

export const Enlaces = styled.a`
	width: 100%;
	font-family: ${(props) => props.theme.fonts.primary};
	font-size: 20px;
	font-weight: 700;
	text-align: left;
	text-decoration: none;

	color: ${(props) => props.theme.colors.primary};
`;
