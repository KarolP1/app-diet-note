import React, { useState } from "react";
import { NotesDisplay } from ".";
import { TinyEditor } from "../../TinyEditor/TinyEditor";
import { NotesContainer } from "./../../../../../containers/Aplication/notesContainer/NotesContainer";

const Notes = () => {
	const [visible, setVisible] = useState(false);
	const [value, setValue] = useState("");
	const [noteId, setNoteId] = useState("");

	return (
		<NotesContainer>
			<TinyEditor
				visible={visible}
				setVisible={setVisible}
				value={value}
				noteId={noteId}
			/>
			<NotesDisplay
				setVisible={setVisible}
				setValue={setValue}
				setNoteId={setNoteId}
			/>
		</NotesContainer>
	);
};

export default Notes;
