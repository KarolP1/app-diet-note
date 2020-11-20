import React, { useEffect, useState } from "react";
import { InputTitle, MainContainer } from "./AdNotes.styled";
import { Editor } from "@tinymce/tinymce-react";

const AdNotes = (props) => {
	const [editorValue, setEditorValue] = useState("");
	const [titleValue, setTitle] = useState("");

	const { setPostData } = props;
	useEffect(() => {
		setPostData({ title: titleValue, value: editorValue });
	}, [titleValue, editorValue, setPostData]);

	return (
		<MainContainer visible={props.visible}>
			<form>
				<InputTitle
					value={titleValue}
					type="text"
					name="name"
					onChange={(event) => setTitle(event.target.value)}
					placeholder="Dodaj tytuł"
				/>
				<Editor
					apiKey="mudahddk8akmnpsm2yod7myf1zx4p2h7tyybwnkbkj5d5325"
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
			</form>
		</MainContainer>
	);
};

export default AdNotes;
