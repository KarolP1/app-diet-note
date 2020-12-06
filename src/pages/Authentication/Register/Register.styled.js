import styled from "styled-components";

export const RegisterContainer = styled.div`
	display: ${(props) => (props.visible ? "none" : "flex")};
	width: 100%;
	height: 100%;
	flex-direction: row;
	box-shadow: ${(props) => props.theme.boxDark};
	border-radius: 1rem;
	@media (max-width: 900px) {
		border: 1px solid ${(props) => props.theme.primaryDark};
	}
`;

export const LoginRegisterButton = styled.button`
	height: 2rem;
	background-color: transparent;
	border: none;
	position: absolute;
	bottom: 1rem;

	&:hover {
		border-bottom: 1px solid ${(props) => props.theme.primaryDark};
	}
	&:active {
		color: ${(props) => props.theme.primaryDark};
		border-color: ${(props) => props.theme.primaryDark};
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	position: relative;
	align-items: center;
	padding-top: 10rem;
`;

export const LeftSideContainer = styled.div`
	flex: 1;
	background-color: ${(props) => props.theme.primaryDark};
	border-radius: 1rem 0 0 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 900px) {
		display: none;
	}
`;

export const ImageLogo1x1 = styled.img`
	height: 40vh;
	width: auto;
`;
///
export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 80%;
	margin: 1rem;
`;
export const Input = styled.input`
	margin: 2rem;
	padding: 1rem 2rem;
	height: 100%;
	width: 40rem;

	box-shadow: ${(props) => props.theme.boxLight};
	border: none;
	border-radius: 1rem;

	&:focus {
		border: 3px solid ${(props) => props.theme.primaryLight};
		color: ${(props) => props.theme.primaryLight};
	}
`;
export const InputTitle = styled.p`
	font-size: 2rem;
	text-transform: capitalize;
`;

export const MyButton = styled.button`
	height: 7rem;
	box-shadow: ${(props) => props.theme.boxLight};
	border: none;
	padding: 1rem 2rem;
	width: 40rem;
	height: 6rem;
	margin-top: 2rem;
	border-radius: 1rem;
	background-color: ${(props) => props.theme.primaryDark};
	color: ${(props) => props.theme.default};
	font-size: 2rem;
	font-weight: 100;
`;

export const AuthContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;
