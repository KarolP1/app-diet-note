import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { CloseAddNote, TinyContainer, InputTitle } from "./TinyEditor.styled";

export const TinyEditor = (props) => {
	const [editorValue, setEditorValue] = useState("");
	const [titleValue, setTitle] = useState("");
	const [initialValue, setInitialValue] = useState("");

	const value = props.value;
	console.log(editorValue);

	useEffect(() => {
		setTitle(value.title);
		setInitialValue(value.value);
	}, [value, props.vale]);

	const closeEditor = props.setVisible;
	return (
		<TinyContainer visible={props.visible}>
			<InputTitle
				value={titleValue ? titleValue : ""}
				type="text"
				name="name"
				onChange={(event) => setTitle(event.target.value)}
				placeholder="Dodaj tytuł"
			/>
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
			<CloseAddNote onClick={() => closeEditor(false)}>x</CloseAddNote>
		</TinyContainer>
	);
};
