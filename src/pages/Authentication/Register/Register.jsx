import React, { useEffect, useState } from "react";
import {
	FormContainer,
	ImageLogo1x1,
	Input,
	LeftSideContainer,
	LoginRegisterButton,
	RegisterContainer,
	AuthContainer,
	InputContainer,
	MyButton,
	ImageContainer,
	LockImage,
} from "./Register.styled";
import Logo_1x1 from "../../../assets/Logo/Logo_1x1.svg";
import { register_function } from "./register_function";
import lock_in from "../../../assets/Logo/lock_in.svg";

export const RegisterPage = (props) => {
	const { setIsLogin } = props;

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

			<FormContainer>
				<ImageContainer>
					<LockImage src={lock_in} />
				</ImageContainer>

				<AuthContainer>
					<InputContainer>
						<Input
							type="email"
							name="email"
							placeholder="Podaj adres email!"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							type="password"
							name="password"
							placeholder="Podaj hasło"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							type="password"
							name="confirm"
							placeholder="Potwierdź hasło"
							onChange={(e) => setConfirm(e.target.value)}
						/>
					</InputContainer>
				</AuthContainer>
				<MyButton type="submit" onClick={() => register_function({ user })}>
					Zarejestruj
				</MyButton>
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
