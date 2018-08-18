import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/style.css";
import App from "./components/App";
import StorePicker from "./components/Storepicker";
import NotFound from "./components/NotFound";

const Root = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={StorePicker} />
			<Route path="/store/:storeId" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

render(<Root />, document.getElementById(`main`));
