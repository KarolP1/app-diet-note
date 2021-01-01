import styled from "styled-components";

export const AuthenticationContainerMain = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	padding: 5rem 10rem;
`;

export const AuthenticationHolder = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	box-shadow: ${(props) => props.theme.boxDark};
	border-radius: 1rem;
`;

export const AuthenticationLeftsideContainer = styled.div`
	border-radius: 1rem;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	flex: 1;
	background-color: ${(props) => props.theme.primaryDark};
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AuthenticationRightsideContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 10rem;
`;

export const LeftSideImage = styled.img`
	display: flex;
	height: auto;
	width: 50%;
`;

export const RightAuthContainer = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5rem;
`;
