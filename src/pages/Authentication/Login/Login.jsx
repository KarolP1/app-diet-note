import React from "react";
import {
	FormContainer,
	ImageLogo1x1,
	LeftSideContainer,
	LoginContainer,
	LoginRegisterButton,
} from "./Login.styled";
import Logo_1x1 from "../../../assets/Logo/Logo_1x1.svg";

export const LoginPage = (props) => {
	const { setIsLogin } = props;

	return (
		<LoginContainer visible={props.isLogin}>
			<LeftSideContainer>
				<ImageLogo1x1 src={Logo_1x1} />
			</LeftSideContainer>
			<FormContainer>
				<p>Login</p>
				<LoginRegisterButton
					type={"button"}
					onClick={() => setIsLogin(!props.isLogin)}
				>
					Nie masz jeszcze konta? Dołącz już teraz!
				</LoginRegisterButton>
			</FormContainer>
		</LoginContainer>
	);
};
