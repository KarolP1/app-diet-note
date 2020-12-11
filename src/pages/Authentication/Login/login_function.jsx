import axios from "axios";

export const postToLogin = async (
	user,
	token,
	setToken,
	message,
	setMessage
) => {
	const LoginUser = { email: user.email, password: user.password };
	await axios
		.post(`http://localhost:8080/user/signin`, LoginUser)
		.then((res) => {
			setToken(res.data.token);
			updateToken(res.data.token);
			setMessage(res.data.message);
			setTimeout(() => {
				window.location.reload();
			}, 100);
			window.location.reload();
		})

		.catch((err) => console.log(err));
};

const updateToken = (token) => {
	localStorage.setItem("token", token);
};
