import styled from "styled-components";

export const FormContainer = styled.form`
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 5rem;
`;

export const LoginInput = styled.input`
	width: 100%;
	background-color: ${(props) => props.theme.defaultLight};
	padding: 1rem 2rem;
	border: 1px solid ${(props) => props.theme.primaryDark};
	margin-bottom: 3rem;
	border-radius: 0.5rem;

	&:hover {
		background-color: ${(props) => props.theme.white};
		color: ${(props) => props.theme.primaryDark};
	}
	&:focus {
		background-color: ${(props) => props.theme.white};
		color: ${(props) => props.theme.primaryDark};
	}
`;

export const LoginButton = styled.button`
	width: 100%;
	background-color: ${(props) => props.theme.primaryDark};
	color: ${(props) => props.theme.default};
	padding: 1rem 2rem;
	margin-top: 3rem;
	border-radius: 0.5rem;
	border: none;

	&:hover {
		background-color: ${(props) => props.theme.primaryMedium};
		box-shadow: ${(props) => props.theme.boxLight};
		transform: scale(1.01);
	}

	&:active {
		transform: scale(1.02) translateY(0.01rem);
	}
`;

export const ErrorMessage = styled.div`
	color: ${(props) => props.theme.warningMedium};
`;
