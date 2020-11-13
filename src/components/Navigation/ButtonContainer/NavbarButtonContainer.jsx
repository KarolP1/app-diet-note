import React, { useState } from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MenuIconPlaceholder,
	MenuPlaceholder,
	NavItem,
	NavLink,
	NavItemLogin,
} from "./NavbarButtonContainer.styled";
import { Burger } from "../../../icons";
import { routes } from "../../../routes";
import { Logo } from "../Logo/NavbarLogo";

const ButtonGroup = (props) => {
	const [open, setOpen] = useState(false);

	const { app, landingPage, landingPageContact, login, signup } = routes;

	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					<Logo />
				</NavLogo>

				<MenuIconPlaceholder>
					<Burger setOpen={() => setOpen(!open)} open={open} size={1.5} />
				</MenuIconPlaceholder>
				<MenuPlaceholder onClick={() => setOpen(!open)} open={open}>
					<NavItem>
						<NavLink to={landingPage}>
							<p>Strona Domowa</p>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to={app}>Aplikacja</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to={landingPageContact}>Kontakt</NavLink>
					</NavItem>
					<NavItemLogin to={login}>Login</NavItemLogin>
					<NavItemLogin to={signup}>Signup</NavItemLogin>
				</MenuPlaceholder>
			</NavbarContainer>
		</Nav>
	);
};

export default ButtonGroup;
