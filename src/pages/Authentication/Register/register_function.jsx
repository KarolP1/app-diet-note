export const register_function = (props) => {
	const { email, password, confirm } = props.user;
	if (email.length && password.length && confirm.length > 0) {
		console.log(props);
	} else alert("you should pass some data");
};
