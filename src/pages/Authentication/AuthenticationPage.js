import React, { useState } from "react";
import { AuthenticationContainer } from "./../../containers/Authentication/Authentication";
import { LogRegButton } from "./../../components/Authentication/LogRegButton/LogRegButton";
import { LoginPage } from "./login/LoginPage";
import LockIcon from "../../icons/Lock/LockIcon";
import { RightAuthContainer } from "../../containers/Authentication/Authentication.styled";
import { LoadingCircle } from "./../../components/Authentication/animations/LoadingCircle";

const AuthenticationPage = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const Login = (isLoading) => {
		if (isLoading) {
			return <LoadingCircle />;
		} else {
			return <LoginPage isLoading={isLoading} setIsLoading={setIsLoading} />;
		}
	};

	return (
		<AuthenticationContainer>
			<LockIcon isLogin={isLogin} />
			<RightAuthContainer>
				{isLogin ? Login(isLoading) : <div>register</div>}
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
