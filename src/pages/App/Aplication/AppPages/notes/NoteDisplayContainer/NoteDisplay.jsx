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
		axios({
			method: "GET",
			url: "https://dietaplication.herokuapp.com/api/notes",
			headers: {
				"content-type": "application/octet-stream",
				"x-rapidapi-host": "quotes15.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
			},
			params: {
				language_code: "en",
			},
		})
			.then((response) => {
				setTimeout(() => {
					setResponseData(response.data);
				}, 1000);
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
