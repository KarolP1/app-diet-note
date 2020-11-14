import React from "react";
import { NotesDisplay } from ".";
import { NotesContainer } from "./../../../../../containers/Aplication/notesContainer/NotesContainer";

const Notes = () => {
	return (
		<NotesContainer>
			<NotesDisplay />
		</NotesContainer>
	);
};

export default Notes;
