import React, { useState } from "react";
import { ButtonAdd } from "../../../../../../containers/Aplication/notesContainer/NotesContainer.styled";
import AdNotes from "../AddNotes/AdNotes";
import axios from "axios";

export const AddButton = () => {
	const [visible, setVisible] = useState(false);

	const [postData, setPostData] = useState({});
	const PostData = () => {
		if (postData.title !== "" && postData.value !== "") {
			axios
				.post("https://dietaplication.herokuapp.com/api/notes", {
					title: postData.title,
					value: postData.value,
				})
				.then((res) => {
					console.log(res);
				})
				.then(() => {
					window.location.reload();
				});
		} else {
			alert("musisz uzupełnić obydwa pola");
		}

		console.log(postData);
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
