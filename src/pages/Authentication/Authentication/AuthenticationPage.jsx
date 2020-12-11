import React, { useEffect, useState } from "react";
import {
	ImageLogo1x1,
	LeftSideContainer,
	RegisterContainer,
} from "./Register.styled";
import Logo_1x1 from "../../../assets/Logo/Logo_1x1.svg";
import RegisterForm from "../../../components/authentication/register/RegisterForm";
import "./style.css";
import LoginForm from "../../../components/authentication/register/LoginForm";

export const AuthenticationPage = (props) => {
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
		<RegisterContainer>
			<LeftSideContainer>
				<ImageLogo1x1 src={Logo_1x1} />
			</LeftSideContainer>
			{isLogin ? (
				<LoginForm
					userData={user}
					setIsLogin={props.setIsLogin}
					isLogin={props.isLogin}
					email={email}
					setEmail={setEmail}
					setPassword={setPassword}
					password={password}
				/>
			) : (
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
			)}
		</RegisterContainer>
	);
};
