import React from "react";
import { ButtonContainer, MyButtonAdd } from "./AddButton.styled";

export const AddButton = () => {
	return (
		<ButtonContainer>
			<MyButtonAdd onClick={() => alert("hello")}>Dodaj Notatke</MyButtonAdd>
		</ButtonContainer>
	);
};
