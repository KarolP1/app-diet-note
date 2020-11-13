import React from "react";
import { AppbarMainContainer } from "./ABcontainer.styled";

export const AppbarNavigationContainer = (props) => {
	return <AppbarMainContainer>{props.children}</AppbarMainContainer>;
};
