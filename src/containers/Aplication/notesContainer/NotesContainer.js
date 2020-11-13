import React from "react";
import { NotesContentContainer } from "./NotesContainer.styled";

export const NotesContainer = (props) => {
	return <NotesContentContainer>{props.children}</NotesContentContainer>;
};
