import React from "react";
import { LoginRegisterButton } from "./LogRegButton.styled";

const LogRegButton = (props) => {
	const { clickFunction } = props;
	return (
		<LoginRegisterButton onClick={() => clickFunction()}>
			{props.children}
		</LoginRegisterButton>
	);
};

export { LogRegButton };
