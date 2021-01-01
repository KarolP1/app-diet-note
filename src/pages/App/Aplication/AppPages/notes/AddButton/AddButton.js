import React, { useState } from "react";
import { ButtonAdd } from "../../../../../../containers/Aplication/notesContainer/NotesContainer.styled";
import AdNotes from "../AddNotes/AdNotes";
import axios from "axios";

export const AddButton = () => {
	const [visible, setVisible] = useState(false);
	const userId = localStorage.getItem("userId");
	const token = localStorage.getItem("token");

	const [postData, setPostData] = useState({});
	const PostData = () => {
		if (postData.title !== "" && postData.value !== "") {
			axios
				.post(
					`https://dietaplication.herokuapp.com/api/notes/${userId}`,
					{
						title: postData.title,
						value: postData.value,
					},
					{
						headers: {
							Authorization: `Barer ${token}`,
							"content-type": "application/JSON",
						},
					}
				)
				.then(() => {
					window.location.reload();
				});
		} else {
			alert("musisz uzupełnić obydwa pola");
		}
	};

	return (
		<>
			<AdNotes
				visible={visible}
				setPostData={setPostData}
				closeAddNote={() => setVisible(false)}
			/>
			<ButtonAdd
				type="submit"
				onClick={() => (visible ? PostData() : setVisible(!visible))}
			>
				Dodaj Notatke
			</ButtonAdd>
			;
		</>
	);
};
