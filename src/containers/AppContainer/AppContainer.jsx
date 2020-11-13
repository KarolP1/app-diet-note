import React from "react";
import { MainContainer } from "./AppContainer.styled";
import {
	colorTheme,
	fontTheme,
	shadowTheme,
	transitionTheme,
} from "../../theme";
import { ThemeProvider } from "styled-components";

export const AppContainer = (props) => {
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
