import React from "react";
import { Image, LogoContainer } from "./NavbarLogo.styled";
import logo from "../../../assets/Logo/Logo_2x1.svg";

export const Logo = () => {
	return (
		<LogoContainer>
			<Image src={logo} alt="Logo" />
		</LogoContainer>
	);
};
