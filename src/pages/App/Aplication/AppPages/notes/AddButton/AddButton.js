import React from "react";
import { ButtonContainer, MyButtonAdd } from "./AddButton.styled";

export const AddButton = () => {
	return (
		<ButtonContainer>
			<MyButtonAdd onClick={() => console.log("hello")}>
				Dodaj Notatke
			</MyButtonAdd>
		</ButtonContainer>
	);
};
