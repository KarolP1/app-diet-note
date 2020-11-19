import React from "react";
import { MainContainer } from "./AdNotes.styled";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "suneditor/dist/css/suneditor.min.css";

const AdNotes = (props) => {
	return (
		<MainContainer visible={props.visible}>
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<CKEditor
				editor={ClassicEditor}
				data="<p>Hello from CKEditor 5!</p>"
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor);
				}}
				onChange={(event, editor) => {
					const data = editor.getData();
					console.log({ event, editor, data });
				}}
				onBlur={(event, editor) => {
					console.log("Blur.", editor);
				}}
				onFocus={(event, editor) => {
					console.log("Focus.", editor);
				}}
			/>
		</MainContainer>
	);
};

export default AdNotes;
