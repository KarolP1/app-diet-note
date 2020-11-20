import styled from "styled-components";

export const SettingsContainer = styled.div`
	position: absolute;
	top: 0;
	right: 2rem;
	height: 5rem;
	display: flex;
	align-items: center;
`;

export const IconButton = styled.button`
	background-color: transparent;
	border: none;
	&:hover {
		transform: translateY(-0.3rem);
	}
	&:active {
		transform: rotate(2deg) scale(1.1);
	}
`;
