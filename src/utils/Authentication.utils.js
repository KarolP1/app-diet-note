import axios from "axios";
import { setCookie } from "../utils/CookieHandler";

export const LoginFunction = async (props) => {
	const { setError, setIsLoading } = props;
	const { email, password } = props.inputValues;

	await axios
		.post("https://dietappreact.herokuapp.com/auth/login", {
			email,
			password,
		})
		.then((res) => {
			setIsLoading(true);
			console.log(res.data);
			setCookie("accesToken", res.data.accessToken, 15 / 24 / 60);
			setCookie("refreshToken", res.data.refreshToken, 7);
			setCookie("userId", res.data.userId, 7);
		})
		.then(async () => {
			await setIsLoading(false);
		})
		.catch((err) => {
			setError(err.response.data.error.message);
			setIsLoading(false);
			return err;
		});
};
