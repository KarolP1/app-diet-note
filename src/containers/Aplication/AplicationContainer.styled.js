import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;

	@media screen and (max-width: 900px) {
		flex-direction: column;
		margin-top: 2rem;
	}
`;
