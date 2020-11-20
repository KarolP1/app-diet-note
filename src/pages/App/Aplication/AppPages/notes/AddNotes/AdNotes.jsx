import React, { useEffect, useState } from "react";
import { MainContainer } from "./AdNotes.styled";
import { Editor } from "@tinymce/tinymce-react";

const AdNotes = (props) => {
	const [editorValue, setEditorValue] = useState("");
	const [titleValue, setTitle] = useState("");

	const [noteValue, setNoteValue] = useState({ title: "", value: "" });

	const { setPostData } = props;
	useEffect(() => {
		setNoteValue({ title: titleValue, value: editorValue });
		setPostData(noteValue);
		console.log(noteValue);
	}, [titleValue, editorValue]);

	return (
		<MainContainer visible={props.visible}>
			<form>
				<label>
					Name:
					<input
						value={titleValue}
						type="text"
						name="name"
						onChange={(event) => setTitle(event.target.value)}
					/>
				</label>
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
