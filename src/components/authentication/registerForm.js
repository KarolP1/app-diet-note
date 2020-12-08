import React, { useState } from "react";
import {
	FormContainer,
	Input,
	LoginRegisterButton,
	AuthContainer,
	InputContainer,
	ImageContainer,
	LockImage,
} from "./registerForm.styled";
import lock_in from "../../assets/Logo/lock_in.svg";
import RegisterButton from "./RegisterButton/RegisterButton";

const RegisterForm = (props) => {
	const {
		setIsLogin,
		setEmail,
		setPassword,
		setConfirm,
		email,
		password,
		confirm,
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
					<InputContainer>
						<Input
							type="password"
							name="confirm"
							value={confirm}
							placeholder="Potwierdź hasło"
							onChange={(e) => setConfirm(e.target.value)}
						/>
					</InputContainer>
				</AuthContainer>
			)}
			<RegisterButton
				setIsLoading={setIsLoading}
				user={user}
				setEmail={setEmail}
				setPassword={setPassword}
				setConfirm={setConfirm}
			/>
			<LoginRegisterButton onClick={() => setIsLogin(!props.isLogin)}>
				Masz już konto ? Zaloguj się!
			</LoginRegisterButton>
		</FormContainer>
	);
};

export default RegisterForm;
