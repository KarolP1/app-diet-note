import styled from "styled-components";

export const NotesContentContainer = styled.div`
	min-height: 90vh;
	height: 100%;
	width: 100%;
	position: relative;
`;

export const ButtonAdd = styled.button`
	position: fixed;
	bottom: 4rem;
	right: 4rem;
	padding: 2rem 4rem;
	background-color: ${(props) => props.theme.primaryDark};
	color: ${(props) => props.theme.default};
	box-shadow: ${(props) => props.theme.boxDark};
	border: none;
	border-radius: 100rem;
	&:hover {
		background-color: ${(props) => props.theme.primaryLight};
	}
	&:active {
		transform: translatey(2px);
		box-shadow: ${(props) => props.theme.boxMedium};
	}
`;
