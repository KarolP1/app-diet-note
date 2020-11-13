import React from "react";
import { ThemeProvider } from "styled-components";
import { AppbarNavigationContainer } from "../../../containers/AppBarContainer/ABcontainer";
import {
	colorTheme,
	fontTheme,
	shadowTheme,
	transitionTheme,
} from "../../../theme";
import ButtonGroup from "../ButtonContainer/NavbarButtonContainer";

export const Navbar = (props) => {
	return (
		<ThemeProvider theme={colorTheme}>
			<ThemeProvider theme={fontTheme}>
				<ThemeProvider theme={shadowTheme}>
					<ThemeProvider theme={transitionTheme}>
						<AppbarNavigationContainer>
							<ButtonGroup />
						</AppbarNavigationContainer>
					</ThemeProvider>
				</ThemeProvider>
			</ThemeProvider>
		</ThemeProvider>
	);
};
