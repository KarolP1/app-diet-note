import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;

	@media screen and (max-width: 900) {
		font-size: 50%;
	}
`;
