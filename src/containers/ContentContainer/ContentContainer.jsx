import React from "react";
import { ContentContainerMain } from "./ContentContainer.styled";

export const ContentContainer = (props) => {
	return <ContentContainerMain>{props.children}</ContentContainerMain>;
};
