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

const NoteDisplay = () => {
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
		return (
			<SingleNoteContainer key={note._id}>
				<Collapsible
					trigger={
						<TitleContainer>
							<Title>{note.title}</Title>
						</TitleContainer>
					}
				>
					<ValueContainer>
						<ValueText>{parse(note.value)}</ValueText>
					</ValueContainer>
				</Collapsible>
				<TagContainer>mby later</TagContainer>
			</SingleNoteContainer>
		);
	});
	return <MainContainer>{MapNotes}</MainContainer>;
};

export default NoteDisplay;
