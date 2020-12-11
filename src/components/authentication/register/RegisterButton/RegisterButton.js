import React from "react";
import { register_function } from "../../../../pages/Authentication/Register/register_function";
import { MyButton } from "../authForms.styled";

const RegisterButton = (props) => {
	const { user, setEmail, setPassword, setConfirm, setIsLoading } = props;
	const clearInputs = () => {
		setIsLoading(true);
		register_function({ user }, setIsLoading);
		setPassword("");
		setConfirm("");
		setEmail("");
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<MyButton type="submit" onClick={clearInputs}>
			Zarejestruj
		</MyButton>
	);
};

export default RegisterButton;
