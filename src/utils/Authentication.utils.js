import axios from "axios";

export const LoginFunction = async (props) => {
	const { setError, setIsLoading, setCookies } = props;
	const { email, password } = props.inputValues;

	await axios
		.post("https://dietappreact.herokuapp.com/auth/login", {
			email,
			password,
		})
		.then(async (response) => {
			setIsLoading(true);
			setCookies("accesToken", response.data.accessToken, {
				maxAge: 604800, //7d
			});
			setCookies("refreshToken", response.data.refreshToken, {
				maxAge: 600, //10 min
			});
			setCookies("userId", response.data.userId, { SameSite: true });
		})
		.then(async () => {
			await setIsLoading(false);
		})
		.catch((err) => {
			setError(err.response.data.error.message);
			return err;
		});
};
