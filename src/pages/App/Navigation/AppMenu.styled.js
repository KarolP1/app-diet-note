import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
	height: 95%;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	border-right: 1px solid ${(props) => props.theme.primaryLight};

	@media screen and (max-width: 900px) {
		flex-direction: column;
		padding: 0;
	}
`;

export const ButtonLink = styled(Link)`
	height: 3rem;
	font-size: 3rem;
	text-decoration: none;
	text-transform: capitalize;
	font-family: "Caveat";
	color: ${(props) => props.theme.primaryDark};
	text-align: center;
	margin-bottom: 2rem;
	&:hover {
		color: ${(props) => props.theme.primaryLight};
		border-bottom: 1px solid ${(props) => props.theme.primaryLight};
		background-color: ${(props) => props.theme.primaryLightest};
	}

	@media screen and (max-width: 900px) {
		max-height: 2rem;
		min-height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20rem;
		box-shadow: ${(props) => props.theme.boxSuperLight};
		margin: 0;
		font-size: 2rem;
	}
`;
export const ButtonSeparator = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	max-height: 5rem;
	@media (min-width: 900px) {
		flex-direction: column;
		max-height: 100%;
	}
`;
