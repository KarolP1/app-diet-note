import React from "react";
import { MainContainer } from "./AdNotes.styled";
import { Editor } from "@tinymce/tinymce-react";

const AdNotes = (props) => {
	const handleEditorChange = (content, editor) => {
		console.log("Content was updated:", content);
	};
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
				initialValue="<p>This is the initial content of the editor</p>"
				init={{
					height: 500,
					menubar: false,
					plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table paste code help wordcount",
					],
					toolbar:
						"undo redo | formatselect | bold italic backcolor | table | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
				}}
				onEditorChange={handleEditorChange}
			/>
		</MainContainer>
	);
};

export default AdNotes;
