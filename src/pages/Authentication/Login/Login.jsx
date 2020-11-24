import React from "react";
import {
	FormContainer,
	LoginContainer,
	LoginRegisterButton,
} from "./Login.styled";

export const LoginPage = (props) => {
	const { setIsLogin } = props;

	return (
		<LoginContainer visible={props.isLogin}>
			<FormContainer>hello</FormContainer>
			<LoginRegisterButton onClick={() => setIsLogin(!props.isLogin)}>
				Nie masz jeszcze konta? Dołącz już teraz!
			</LoginRegisterButton>
		</LoginContainer>
	);
};
