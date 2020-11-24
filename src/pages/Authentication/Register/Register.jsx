import React from "react";
import {
	FormContainer,
	ImageLogo1x1,
	LeftSideContainer,
	LoginRegisterButton,
	RegisterContainer,
} from "./Register.styled";
import Logo_1x1 from "../../../assets/Logo/Logo_1x1.svg";

export const RegisterPage = (props) => {
	const { setIsLogin } = props;
	return (
		<RegisterContainer visible={props.isLogin}>
			<LeftSideContainer>
				<ImageLogo1x1 src={Logo_1x1} />
			</LeftSideContainer>
			<FormContainer>
				<p>Register</p>
				<LoginRegisterButton onClick={() => setIsLogin(!props.isLogin)}>
					Masz już konto ? Zaloguj się!
				</LoginRegisterButton>
			</FormContainer>
			<LoginRegisterButton
				type={"button"}
				onClick={() => setIsLogin(!props.isLogin)}
			></LoginRegisterButton>
		</RegisterContainer>
	);
};
