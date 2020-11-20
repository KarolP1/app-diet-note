import React, { useState } from "react";
import { RubbisBin } from "../../../../../../../icons/Rubishbin/rubishbin";
import { IconButton, SettingsContainer } from "./DisplaySettings.styled";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import {
	colorTheme,
	fontTheme,
	shadowTheme,
	transitionTheme,
} from "../../../../../../../theme";

const DisplaySettings = (props) => {
	const deleteNote = (NoteId) => {
		axios
			.delete(`https://dietaplication.herokuapp.com/api/notes/${NoteId}`)
			.then((res) => {
				console.log(res);
			})
			.then(() => {
				window.location.reload();
			});
	};
	const [color, setColor] = useState(colorTheme.default);
	return (
		<ThemeProvider theme={colorTheme}>
			<ThemeProvider theme={fontTheme}>
				<ThemeProvider theme={shadowTheme}>
					<ThemeProvider theme={transitionTheme}>
						<SettingsContainer>
							{/* delete button */}
							<IconButton
								onMouseEnter={() => {
									setColor(colorTheme.warningMedium);
								}}
								onMouseLeave={() => {
									setColor(colorTheme.default);
								}}
								onClick={() => deleteNote(props.NoteId)}
							>
								<RubbisBin size={25} color={color} />
							</IconButton>
						</SettingsContainer>
					</ThemeProvider>
				</ThemeProvider>
			</ThemeProvider>
		</ThemeProvider>
	);
};

export default DisplaySettings;
