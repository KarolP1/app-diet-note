import axios from "axios";

export const LoginFunction = async (props) => {
	const { setError, setIsLoading } = props;
	const { email, password } = props.inputValues;

	await axios
		.post("https://dietappreact.herokuapp.com/auth/login", {
			email,
			password,
		})
		.then(() => {
			setIsLoading(true);
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
