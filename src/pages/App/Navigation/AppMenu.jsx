import { ButtonContainer, ButtonLink, ButtonSeparator } from "./AppMenu.styled";

export const AppMenu = () => {
	return (
		<ButtonContainer>
			<ButtonSeparator>
				<ButtonLink to={`/app`}>Home</ButtonLink>
				<ButtonLink to="/app/diets">Diety</ButtonLink>
				<ButtonLink to="/app/notes">Notes</ButtonLink>
			</ButtonSeparator>
			<ButtonSeparator>
				<ButtonLink to="/app/patterns">Baza wzorów</ButtonLink>
				<ButtonLink to="/app/illnes">Baza Chorób</ButtonLink>
			</ButtonSeparator>
		</ButtonContainer>
	);
};
