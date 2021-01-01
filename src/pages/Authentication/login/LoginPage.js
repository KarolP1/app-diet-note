import React, { useState } from "react";
import {
	ErrorMessage,
	FormContainer,
	LoginButton,
	LoginInput,
} from "./LoginPage.styled";
import { LoginFunction } from "../../../utils/Authentication.utils";
import { LoadingCircle } from "../../../components/Authentication/animations/LoadingCircle";

export const LoginPage = () => {
	const [error, setError] = useState();

	const [inputValues, setInputValues] = useState({
		email: "",
		password: "",
	});

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
	};

	return (
		<FormContainer>
			<LoadingCircle />
			<LoginInput
				type="text"
				placeholder="podaj adres email"
				name="email"
				onChange={handleOnChange}
			/>
			<LoginInput
				type="password"
				placeholder="podaj hasło"
				name="password"
				onChange={handleOnChange}
			/>
			{error ? <ErrorMessage>{error}</ErrorMessage> : null}
			<LoginButton
				type="button"
				onClick={() => LoginFunction({ inputValues, setError })}
			>
				Zaloguj
			</LoginButton>
		</FormContainer>
	);
};
