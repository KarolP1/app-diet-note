import React, { useState } from "react";
import { LoginPage } from "..";
import { RegisterPage } from "../Register/Register";
import { AuthContainer } from "./authentication.styled";

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<AuthContainer>
			<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />
			<RegisterPage isLogin={isLogin} setIsLogin={setIsLogin} />
		</AuthContainer>
	);
};

export default Authentication;
