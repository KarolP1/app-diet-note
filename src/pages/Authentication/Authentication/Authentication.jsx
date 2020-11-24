import React, { useEffect, useState } from "react";
import { LoginPage } from "..";
import { RegisterPage } from "../Register/Register";
import { AuthContainer } from "./authentication.styled";

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true);
	useEffect(() => {
		if (isLogin) {
			console.log("login");
		} else {
			console.log("register");
		}
	}, [isLogin]);

	return (
		<AuthContainer>
			<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />
			<RegisterPage isLogin={isLogin} setIsLogin={setIsLogin} />
		</AuthContainer>
	);
};

export default Authentication;
