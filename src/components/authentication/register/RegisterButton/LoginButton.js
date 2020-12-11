import React, { useState } from "react";
import { postToLogin } from "../../../../pages/Authentication/Login/login_function";
import { MyButton } from "../authForms.styled";

const LoginButton = (props) => {
	const { user } = props;
	const [token, setToken] = useState("");
	const [message, setMessage] = useState("");
	const { setIsLoading } = props;

	const LoginFunction = () => {
		setIsLoading(true);
		postToLogin(user, token, setToken, message, setMessage);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<MyButton type="submit" onClick={LoginFunction}>
			{props.children}
		</MyButton>
	);
};

export default LoginButton;
