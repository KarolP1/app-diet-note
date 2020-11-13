import React from "react";
import { ThemeProvider } from "styled-components";
import { MainContainer } from "./AplicationContainer.styled";
import {
	colorTheme,
	fontTheme,
	shadowTheme,
	transitionTheme,
} from "../../theme";

const AplicationContainer = (props) => {
	return (
		<ThemeProvider theme={colorTheme}>
			<ThemeProvider theme={fontTheme}>
				<ThemeProvider theme={shadowTheme}>
					<ThemeProvider theme={transitionTheme}>
						<MainContainer>{props.children}</MainContainer>
					</ThemeProvider>
				</ThemeProvider>
			</ThemeProvider>
		</ThemeProvider>
	);
};

export default AplicationContainer;
