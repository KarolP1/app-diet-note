import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./views/App";
import "./index.css";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<CookiesProvider>
				<App />
			</CookiesProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
