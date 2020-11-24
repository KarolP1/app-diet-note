import React from "react";
import {
	FormContainer,
	LoginRegisterButton,
	RegisterContainer,
} from "./Register.styled";

export const RegisterPage = (props) => {
	const { setIsLogin } = props;
	return (
		<RegisterContainer visible={props.isLogin}>
			<FormContainer>hello</FormContainer>
			<LoginRegisterButton onClick={() => setIsLogin(!props.isLogin)}>
				Masz już konto ? Zaloguj się!
			</LoginRegisterButton>
		</RegisterContainer>
	);
};
