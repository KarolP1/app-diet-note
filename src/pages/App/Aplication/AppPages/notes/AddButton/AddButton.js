import React, { useState } from "react";
import { ButtonAdd } from "../../../../../../containers/Aplication/notesContainer/NotesContainer.styled";
import AdNotes from "../AddNotes/AdNotes";
import axios from "axios";

export const AddButton = () => {
	const [visible, setVisible] = useState(false);

	const [postData, setPostData] = useState({});

	const PostData = () => {
		console.log(postData);

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
	};

	return (
		<>
			<AdNotes visible={visible} setPostData={setPostData} />
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
