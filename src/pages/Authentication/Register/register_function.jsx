import axios from "axios";

export const register_function = (props) => {
	const { email, password, confirm } = props.user;

	if (email.length && password.length && confirm.length > 0) {
		confirmPassword(email, password, confirm);
	} else alert("you should pass some data");
};
const postUser = async (user) => {
	await axios
		.post(`http://localhost:8080/user/signup`, { ...user })
		.then((res) => {
			console.log(res);
			console.log(res.data);
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};
const confirmPassword = (email, password, confirm) => {
	const user = { email, password };

	if (password !== confirm) {
		alert("Hasła muszą być takie same !");
	} else {
		postUser(user);
	}
};
