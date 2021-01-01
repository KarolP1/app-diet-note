import styled from "styled-components";

export const LoginRegisterButton = styled.button`
	height: 2rem;
	background-color: transparent;
	border: none;

	&:hover {
		border-bottom: 1px solid ${(props) => props.theme.primaryDark};
	}
	&:active {
		color: ${(props) => props.theme.primaryDark};
		border-color: ${(props) => props.theme.primaryDark};
	}
`;
