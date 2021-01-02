import React, { useState } from "react";
import {
	ErrorMessage,
	FormContainer,
	LoginButton,
	LoginInput,
} from "./LoginPage.styled";
import { LoginFunction } from "../../../utils/Authentication.utils";
import { useCookies } from "react-cookie";

export const LoginPage = (props) => {
	const { setIsLoading } = props;
	const [error, setError] = useState();
	const [cookies, setCookies] = useCookies([
		"accesToken",
		"refreshToken",
		"userId",
	]);

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
				onClick={() =>
					LoginFunction({
						inputValues,
						setError,
						setIsLoading,
						setCookies,
						cookies,
					})
				}
			>
				Zaloguj
			</LoginButton>
		</FormContainer>
	);
};
