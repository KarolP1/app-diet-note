import styled from "styled-components";

export const MainContainer = styled.div`
	position: absolute;
	top: 20px;
	bottom: 20px;
	background-color: ${(props) => props.theme.default};
	width: 100%;
	padding: 2rem;
	display: ${(props) => (props.visible ? "flex" : "none")};
	flex-direction: column;
`;

export const InputTitle = styled.input`
	font-size: 2rem;
	padding: 1rem 2rem;
	margin-bottom: 2rem;
	border: 1px solid ${(props) => props.theme.primaryDark};
	border-radius: 1rem;
`;
