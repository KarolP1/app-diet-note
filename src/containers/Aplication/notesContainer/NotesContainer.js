import React from "react";
import { NotesContentContainer } from "./NotesContainer.styled";
import { AddButton } from "./../../../pages/App/Aplication/AppPages/notes/AddButton/AddButton";

export const NotesContainer = (props) => {
	return (
		<NotesContentContainer>
			{props.children}
			<AddButton />
		</NotesContentContainer>
	);
};
