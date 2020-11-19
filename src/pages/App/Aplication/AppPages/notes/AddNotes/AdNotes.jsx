import React from "react";
import { MainContainer } from "./AdNotes.styled";

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
		</MainContainer>
	);
};

export default AdNotes;
