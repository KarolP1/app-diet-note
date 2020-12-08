import React, { useEffect, useState } from "react";
import {
	ImageLogo1x1,
	LeftSideContainer,
	LoginRegisterButton,
	RegisterContainer,
} from "./Register.styled";
import Logo_1x1 from "../../../assets/Logo/Logo_1x1.svg";
import RegisterForm from "../../../components/authentication/registerForm";
import "./style.css";

export const RegisterPage = (props) => {
	const { isLogin, setIsLogin } = props;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");

	const [user, setUser] = useState({
		email: email,
		password: password,
		confirm: confirm,
	});

	useEffect(() => {
		setUser({ email, password, confirm });
	}, [email, password, confirm]);

	return (
		<RegisterContainer visible={props.isLogin}>
			<LeftSideContainer>
				<ImageLogo1x1 src={Logo_1x1} />
			</LeftSideContainer>

			<RegisterForm
				userData={(email, password, confirm)}
				setIsLogin={props.setIsLogin}
				setPassword={setPassword}
				setEmail={setEmail}
				setConfirm={setConfirm}
				confirm={confirm}
				email={email}
				password={password}
			/>

			<LoginRegisterButton
				type={"button"}
				onClick={() => setIsLogin(!isLogin)}
			></LoginRegisterButton>
		</RegisterContainer>
	);
};
