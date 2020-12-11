import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage, Aplication, ContactPage, AuthPage } from "../pages/";
import "./App.css";
import { Navbar } from "../components/Navigation/Navbar/Navbar";
import { AppContainer } from "./../containers/AppContainer/AppContainer";
import { ContentContainer } from "../containers/ContentContainer/ContentContainer";

function App() {
	const token = localStorage.getItem("token");
	const IsLoggedIn = (token) => {
		if (token === null) {
			return false;
		} else return true;
	};
	console.log(IsLoggedIn(token));

	return (
		<AppContainer>
			<Navbar />
			<ContentContainer>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/app">
						<Aplication />
					</Route>
					<Route exact path="/contact">
						<ContactPage />
					</Route>
					<Route exact path="/auth">
						{token === null ? <AuthPage /> : <Redirect to="/" />}
					</Route>
				</Switch>
			</ContentContainer>
		</AppContainer>
	);
}

export default App;
