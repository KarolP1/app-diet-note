import axios from "axios";

export const LoginFunction = async (props) => {
	const { setError, setResponse } = props;
	const { email, password } = props.inputValues;
	console.log(props);

	await axios
		.post("https://dietappreact.herokuapp.com/auth/login", {
			email,
			password,
		})
		.then((response) => {
			setError(null);
			setResponse(response.data);
		})
		.catch((err) => {
			console.log({ error: err.response.data });
			setError(err.response.data.error.message);
			return err;
		});
};
