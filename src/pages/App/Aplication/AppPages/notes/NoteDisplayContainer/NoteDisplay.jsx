import React, { useEffect, useState } from "react";
import data from "../../../../../../static/noteStatic/noteData.json";
import {
	MainContainer,
	SingleNoteContainer,
	TagContainer,
	TagText,
	Title,
	TitleContainer,
	ValueContainer,
	ValueText,
} from "./NoteDisplay.styled";
import Collapsible from "react-collapsible";

const NoteDisplay = () => {
	const [note, setNote] = useState(data);

	useEffect(() => {
		setNote(data.note);
	}, [note]);

	const MapNotes = data.notes.map((note) => {
		return (
			<SingleNoteContainer key={note.id}>
				<Collapsible
					trigger={
						<TitleContainer>
							<Title>{note.title}</Title>
						</TitleContainer>
					}
				>
					<ValueContainer>
						<ValueText>{note.value}</ValueText>
					</ValueContainer>
				</Collapsible>
				<TagContainer>
					{note.tagname.map((tag, i) => (
						<TagText key={i} to={`/app/notes/${tag}`}>
							{tag}
						</TagText>
					))}
				</TagContainer>
			</SingleNoteContainer>
		);
	});
	return <MainContainer>{MapNotes}</MainContainer>;
};

export default NoteDisplay;
