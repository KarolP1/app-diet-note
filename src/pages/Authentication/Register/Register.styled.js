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
