import React, { useState } from "react";
import {
	AuthContainer,
	InputContainer,
	Input,
	FormContainer,
	ImageContainer,
	LockImage,
	LoginRegisterButton,
} from "./authForms.styled";

import LoginButton from "./RegisterButton/LoginButton";
import lock_in from "../../../assets/Logo/lock_in.svg";

const LoginForm = (props) => {
	const {
		setIsLogin,
		setEmail,
		setPassword,
		setConfirm,
		email,
		password,
		confirm,
		isLogin,
	} = props;
	let user = { email, password, confirm };

	const [isLoading, setIsLoading] = useState(false);

	return (
		<FormContainer>
			<ImageContainer>
				<LockImage src={lock_in} />
			</ImageContainer>
			{isLoading ? (
				<div class="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			) : (
				<AuthContainer>
					<InputContainer>
						<Input
							type="email"
							name="email"
							value={email}
							placeholder="Podaj adres email!"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							type="password"
							name="password"
							value={password}
							placeholder="Podaj hasło"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputContainer>
				</AuthContainer>
			)}
			<LoginButton
				setIsLoading={setIsLoading}
				user={user}
				setEmail={setEmail}
				setPassword={setPassword}
				setConfirm={setConfirm}
			>
				Zaloguj
			</LoginButton>
			<LoginRegisterButton
				onClick={() => {
					console.log(isLogin);
					setIsLogin(!isLogin);
				}}
			>
				Nie masz jeszcze konta ? Zarejestruj się!
			</LoginRegisterButton>
		</FormContainer>
	);
};

export default LoginForm;
