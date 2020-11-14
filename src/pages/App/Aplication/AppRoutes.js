import React from "react";
import { Switch, Route } from "react-router-dom";
import Diets from "./AppPages/Diets";
import Home from "./AppPages/Home";
import Illnes from "./AppPages/Illnes";
import Notes from "./AppPages/notes/Note";
import Patterns from "./AppPages/Patterns";

const AppRoutes = () => {
	return (
		<Switch>
			<Route exact path={"/app"}>
				<Home />
			</Route>
			<Route path={"/app/diets"}>
				<Diets />
			</Route>
			<Route path={"/app/illnes"}>
				<Illnes />
			</Route>
			<Route path={"/app/patterns"}>
				<Patterns />
			</Route>
			<Route path={"/app/notes"}>
				<Notes />
			</Route>
		</Switch>
	);
};

export default AppRoutes;
