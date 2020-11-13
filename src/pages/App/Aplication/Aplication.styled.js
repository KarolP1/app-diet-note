import styled from "styled-components";

export const MenuContainer = styled.div`
	flex: 1;
	min-width: 22rem;
	position: relative;
	border-right: 1px solid ${(props) => props.theme.primaryLight};
`;

export const ContentContainer = styled.div`
	flex: 6;
	height: 100%;
`;
