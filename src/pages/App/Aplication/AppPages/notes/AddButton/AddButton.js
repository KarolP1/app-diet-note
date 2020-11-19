import React from "react";
import { ButtonAdd } from "../../../../../../containers/Aplication/notesContainer/NotesContainer.styled";

export const AddButton = () => {
	return <ButtonAdd onClick={() => alert("hello")}>Dodaj Notatke</ButtonAdd>;
};
