import React from "react";
import AppRoutes from "./AppRoutes";
import { AppMenu } from "../Navigation/AppMenu";
import AplicationContainer from "./../../../containers/Aplication/AplicationContainer";
import { MenuContainer, ContentContainer } from "./Aplication.styled";
import { ThemeProvider } from "styled-components";
import { colorTheme } from "./../../../theme/colorTheme";
import { fontTheme, shadowTheme, transitionTheme } from "../../../theme";

export const Aplication = () => {
	return (
		<ThemeProvider theme={colorTheme}>
			<ThemeProvider theme={fontTheme}>
				<ThemeProvider theme={shadowTheme}>
					<ThemeProvider theme={transitionTheme}>
						<AplicationContainer>
							<MenuContainer>
								<AppMenu />
							</MenuContainer>
							<ContentContainer>
								<AppRoutes />
							</ContentContainer>
						</AplicationContainer>
					</ThemeProvider>
				</ThemeProvider>
			</ThemeProvider>
		</ThemeProvider>
	);
};
