import React, { useEffect, useState } from "react";
import { AuthenticationContainer } from "./../../containers/Authentication/Authentication";
import { LogRegButton } from "./../../components/Authentication/LogRegButton/LogRegButton";
import { LoginPage } from "./login/LoginPage";
import LockIcon from "../../icons/Lock/LockIcon";
import { RightAuthContainer } from "../../containers/Authentication/Authentication.styled";

const AuthenticationPage = () => {
	const [isLogin, setIsLogin] = useState(true);

	useEffect(() => {
		console.log(isLogin);
	}, [isLogin]);

	return (
		<AuthenticationContainer>
			<LockIcon isLogin={isLogin} />
			<RightAuthContainer>
				{isLogin ? <LoginPage /> : <div>register</div>}
			</RightAuthContainer>
			<LogRegButton clickFunction={() => setIsLogin(!isLogin)}>
				{isLogin
					? "Nie masz jeszcze konta? Zarejestruj się!"
					: "Masz już konto? Zaloguj się!"}
			</LogRegButton>
		</AuthenticationContainer>
	);
};

export default AuthenticationPage;
