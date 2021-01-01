import React, { useEffect, useState } from "react";
import {
	MainContainer,
	SingleNoteContainer,
	TagContainer,
	Title,
	TitleContainer,
	ValueContainer,
	ValueText,
} from "./NoteDisplay.styled";
import Collapsible from "react-collapsible";
import parse from "html-react-parser";
import axios from "axios";
import DisplaySettings from "./NoteDisplaySettings/DisplaySettings";

const NoteDisplay = (props) => {
	const [responseData, setResponseData] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const userID = localStorage.getItem("userId");

		axios
			.get(`https://dietaplication.herokuapp.com/api/notes/${userID}/`, {
				headers: {
					Authorization: `Barer ${token}`,
					"content-type": "application/JSON",
				},
			})
			.then((response) => {
				setResponseData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setResponseData, responseData]);

	const MapNotes = responseData.map((note) => {
		let textValue = note.value;
		textValue = textValue.replace(/>\s</g, "><");

		textValue = parse(textValue);
		return (
			<SingleNoteContainer key={note._id}>
				<Collapsible
					trigger={
						<TitleContainer>
							<Title>{note.title}</Title>
						</TitleContainer>
					}
				>
					<DisplaySettings
						NoteId={note._id}
						setVisible={props.setVisible}
						setValue={props.setValue}
						setNoteId={props.setNoteId}
					/>
					<ValueContainer>
						<ValueText>{textValue}</ValueText>
					</ValueContainer>
				</Collapsible>
				<TagContainer>mby later</TagContainer>
			</SingleNoteContainer>
		);
	});
	return (
		<MainContainer>
			{responseData.length > 0 ? MapNotes : <div>Loading...</div>}
		</MainContainer>
	);
};

export default NoteDisplay;
