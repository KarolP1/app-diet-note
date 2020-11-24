import styled from "styled-components";

export const LoginContainer = styled.div`
	display: ${(props) => (props.visible ? "flex" : "none")};
	width: 100%;
	height: 100%;
	flex-direction: column;
`;

export const LoginRegisterButton = styled.button`
	height: 2rem;
	background-color: transparent;
	border: none;

	&:hover {
		border-bottom: 1px solid ${(props) => props.theme.primaryDark};
	}
	&:active {
		border-color: ${(props) => props.theme.primaryDark};
		color: ${(props) => props.theme.primaryDark};
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
