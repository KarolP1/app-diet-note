import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
	padding: 2rem 4rem;
`;

export const SingleNoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 1px solid ${(props) => props.theme.primaryDark};
	border-radius: 0.5rem;
	margin-bottom: 2rem;
	position: relative;
`;

export const TitleContainer = styled.div`
	background-color: ${(props) => props.theme.primaryDark};
	padding: 1rem 2rem;
	color: ${(props) => props.theme.default};
	text-transform: capitalize;
	font-size: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	&:hover {
		background-color: ${(props) => props.theme.primaryMedium};
	}
`;

export const Title = styled.p`
	width: 100%;

	width: 250px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const ValueContainer = styled.div`
	width: ${(props) => props.width};
	padding: 1rem 2rem;
`;

export const ValueText = styled.div`
	font-size: 1.5rem;
`;

export const TagContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;
`;

export const TagText = styled(Link)`
	display: flex;
	text-align: center;
	text-decoration: none;
	color: ${(props) => props.theme.primaryDark};
	font-size: 1.5rem;
	margin-bottom: 1rem;
	margin-right: 1rem;
	font-weight: bold;

	border-bottom: 3px solid transparent;
	&:hover {
		color: ${(props) => props.theme.primaryMedium};
		border-bottom: 3px solid ${(props) => props.theme.primaryMedium};
	}
`;
