import React from "react";
import { ButtonAdd, NotesContentContainer } from "./NotesContainer.styled";

export const NotesContainer = (props) => {
	return (
		<NotesContentContainer>
			{props.children}
			<ButtonAdd>Dodaj Notatkę</ButtonAdd>
		</NotesContentContainer>
	);
};
