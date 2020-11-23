import React, { useState } from "react";
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
	const { setValue } = props;
	const showEditor = props.setVisible;

	const deleteNote = (NoteId) => {
		axios
			.delete(`https://dietaplication.herokuapp.com/api/notes/${NoteId}`)
			.then((res) => {
				window.location.reload();
			});
	};
	const editNoteGet = async (NoteId) => {
		const res = await axios.get(
			`https://dietaplication.herokuapp.com/api/notes/${NoteId}`
		);
		setValue(res.data);
		showEditor(true);
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
