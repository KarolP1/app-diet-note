import React, { useEffect, useState } from "react";
import { AuthenticationPage } from "./AuthenticationPage";
import { AuthContainer } from "./Register.styled";

const Authentication = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<AuthContainer>
			<AuthenticationPage isLogin={isLogin} setIsLogin={setIsLogin} />
		</AuthContainer>
	);
};

export default Authentication;
