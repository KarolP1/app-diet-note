import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, Aplication, Login, ContactPage, Register } from "../pages/";
import "./App.css";
import { Navbar } from "../components/Navigation/Navbar/Navbar";
import { AppContainer } from "./../containers/AppContainer/AppContainer";
import { ContentContainer } from "../containers/ContentContainer/ContentContainer";

function App() {
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
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register getPath />
					</Route>
				</Switch>
			</ContentContainer>
		</AppContainer>
	);
}

export default App;
