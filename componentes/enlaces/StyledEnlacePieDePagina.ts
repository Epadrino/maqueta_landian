import styled from 'styled-components';

export const Enlaces = styled.a`
	font-family: ${(props) => props.theme.fonts.primary};
	font-size: 15px;
	font-weight: 500;
	text-align: center;
	text-decoration: none;

	color: ${(props) => props.theme.colors.primary};
`;
