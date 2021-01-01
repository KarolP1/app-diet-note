import React from "react";
import {
	AuthenticationContainerMain,
	AuthenticationHolder,
	AuthenticationLeftsideContainer,
	AuthenticationRightsideContainer,
	LeftSideImage,
} from "./Authentication.styled";

import { logo1x1 } from "../../assets/";

export const AuthenticationContainer = (props) => {
	return (
		<AuthenticationContainerMain>
			<AuthenticationHolder>
				<AuthenticationLeftSide />
				<AuthenticationRightSide>{props.children}</AuthenticationRightSide>
			</AuthenticationHolder>
		</AuthenticationContainerMain>
	);
};

export const AuthenticationLeftSide = () => {
	return (
		<AuthenticationLeftsideContainer>
			<LeftSideImage src={logo1x1} />
		</AuthenticationLeftsideContainer>
	);
};

export const AuthenticationRightSide = (props) => {
	return (
		<AuthenticationRightsideContainer>
			{props.children}
		</AuthenticationRightsideContainer>
	);
};
