import React, { useState } from "react";
import { ButtonAdd } from "../../../../../../containers/Aplication/notesContainer/NotesContainer.styled";
import AdNotes from "../AddNotes/AdNotes";

export const AddButton = () => {
	const [visible, setVisible] = useState(true);
	return (
		<>
			<AdNotes visible={visible} />
			<ButtonAdd onClick={() => setVisible(!visible)}>Dodaj Notatke</ButtonAdd>;
		</>
	);
};
