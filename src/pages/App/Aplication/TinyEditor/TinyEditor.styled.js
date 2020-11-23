import styled from "styled-components";

export const TinyContainer = styled.div`
	position: absolute;
	background-color: #ccc;
	width: 100%;
	z-index: 100;
	display: ${(props) => (props.visible ? "flex" : "none")};
	top: 20px;
	bottom: 20px;
	background-color: ${(props) => props.theme.default};
	padding: 2rem;
	padding-top: 0rem;
	display: ${(props) => (props.visible ? "flex" : "none")};
	flex-direction: column;
`;

export const CloseAddNote = styled.button`
	height: 4rem;
	width: 4rem;
	background-color: ${(props) => props.theme.primaryDark};
	color: ${(props) => props.theme.default};
	position: absolute;
	top: 0;
	right: 3rem;

	&:hover {
		background-color: ${(props) => props.theme.warningLight};
	}

	&:active {
		transform: rotate(2deg) scale(1.1);
	}
`;
export const InputTitle = styled.input`
	font-size: 2rem;
	padding: 1rem 2rem;
	margin-bottom: 2rem;
	border: 1px solid ${(props) => props.theme.primaryDark};
	border-radius: 1rem;
	margin-right: 6rem;
`;
