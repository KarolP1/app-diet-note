import React, { useEffect, useState } from "react";
import { RubbisBin } from "../../../../../../../icons/Rubishbin/rubishbin";
import { IconButton, SettingsContainer } from "./DisplaySettings.styled";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { Eye } from "./../../../../../../../icons/Eye/Eye";
import {
	colorTheme,
	fontTheme,
	shadowTheme,
	transitionTheme,
} from "../../../../../../../theme";

const DisplaySettings = (props) => {
	const userID = localStorage.getItem("userId");
	const token = localStorage.getItem("token");
	const { setValue } = props;
	const showEditor = props.setVisible;

	const [dataValue, setDataValue] = useState({});

	useEffect(() => {
		setValue(dataValue);
	}, [dataValue, setValue]);

	const deleteNote = (NoteId) => {
		console.log("delete : " + NoteId, "userId : " + userID);
		axios
			.delete(
				`https://dietaplication.herokuapp.com/api/notes/${userID}/${NoteId}`,
				{
					headers: {
						Authorization: `Barer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	const editNoteGet = async (NoteId) => {
		console.log("edit : " + NoteId, "userId : " + userID);
		await axios
			.get(
				`https://dietaplication.herokuapp.com/api/notes/${userID}/${NoteId}`,
				{
					headers: {
						Authorization: `Barer ${token}`,
					},
				}
			)
			.then((res) => {
				setDataValue(res.data[0]);
				console.log(dataValue);
				showEditor(true);
			})
			.catch((err) => console.log(err));
	};

	const [colorDelete, setColorDelete] = useState(colorTheme.default);
	const [colorEdit, setColorEdit] = useState(colorTheme.default);
	return (
		<ThemeProvider theme={colorTheme}>
			<ThemeProvider theme={fontTheme}>
				<ThemeProvider theme={shadowTheme}>
					<ThemeProvider theme={transitionTheme}>
						<SettingsContainer>
							{/* delete button */}
							<IconButton
								onMouseEnter={() => {
									setColorDelete(colorTheme.warningMedium);
								}}
								onMouseLeave={() => {
									setColorDelete(colorTheme.default);
								}}
								onClick={() => deleteNote(props.NoteId)}
							>
								<RubbisBin size={25} color={colorDelete} />
							</IconButton>
							{/* Edit Button */}
							<IconButton
								onMouseEnter={() => {
									setColorEdit(colorTheme.secondaryDark);
								}}
								onMouseLeave={() => {
									setColorEdit(colorTheme.default);
								}}
								onClick={() => editNoteGet(props.NoteId)}
							>
								<Eye size={25} color={colorEdit} />
							</IconButton>
						</SettingsContainer>
					</ThemeProvider>
				</ThemeProvider>
			</ThemeProvider>
		</ThemeProvider>
	);
};

export default DisplaySettings;
