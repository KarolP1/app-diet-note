import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
	CloseAddNote,
	TinyContainer,
	InputTitle,
	TitleContainer,
	ButtonAdd,
} from "./TinyEditor.styled";
import Axios from "axios";

export const TinyEditor = (props) => {
	const [editorValue, setEditorValue] = useState("");
	const [titleValue, setTitle] = useState("");
	const [initialValue, setInitialValue] = useState("");

	const { value, noteId } = props;

	useEffect(() => {
		setTitle(value.title);
		setInitialValue(value.value);
	}, [value, props.vale]);

	const closeEditor = props.setVisible;

	const editNotePost = async (noteId) => {
		Axios.patch(`https://dietaplication.herokuapp.com/api/notes/${noteId}`, {
			title: titleValue,
			value: editorValue,
		}).then(
			setTimeout(() => {
				window.location.reload();
			}, 1000)
		);
	};

	return (
		<TinyContainer visible={props.visible}>
			<TitleContainer>
				<InputTitle
					value={titleValue ? titleValue : ""}
					type="text"
					name="name"
					onChange={(event) => setTitle(event.target.value)}
					placeholder="Dodaj tytuł"
				/>
				<CloseAddNote onClick={() => closeEditor(false)}>x</CloseAddNote>
			</TitleContainer>
			<Editor
				apiKey="mudahddk8akmnpsm2yod7myf1zx4p2h7tyybwnkbkj5d5325"
				value={initialValue}
				init={{
					height: 500,
					menubar: true,
					plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table paste code help wordcount",
					],
					toolbar:
						"undo redo | formatselect | bold italic backcolor | table | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
				}}
				onEditorChange={(e, editor) => setEditorValue(editor.getContent())}
			/>
			<ButtonAdd onClick={() => editNotePost(noteId)}>edytuj Notatke</ButtonAdd>
		</TinyContainer>
	);
};
