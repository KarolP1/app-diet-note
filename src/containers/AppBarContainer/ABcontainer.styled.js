import styled from "styled-components";

export const AppbarMainContainer = styled.div`
	width: 100%;
	min-height: 6rem;
	background-color: ${(props) => props.theme.primaryDark};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	z-index: 1000;
`;
