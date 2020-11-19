import React, { useState } from "react";
import { MainContainer } from "./AdNotes.styled";
import { Editor } from "@tinymce/tinymce-react";

const AdNotes = (props) => {
	const [editorValue, setEditorValue] = useState("");

	return (
		<MainContainer visible={props.visible}>
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
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
			{editorValue}
		</MainContainer>
	);
};

export default AdNotes;
