import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import General from "./pages/General";
import Help from "./pages/Help";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Ads from "./pages/Ads";

import Ui from "./layout/Ui";
import AuthUi from "./layout/AuthUi";

import { Provider } from "./context/context";

function App() {
	return (
		<Provider>
			<div>
				<Router>
					<Switch>
						<RouteWrapper
							path="/"
							exact
							component={General}
							layout={Ui}
						/>
						<RouteWrapper
							path="/payment"
							component={Payment}
							layout={Ui}
						/>
						<RouteWrapper
							path="/support"
							component={Help}
							layout={Ui}
						/>
						<RouteWrapper path="/ads" component={Ads} layout={Ui} />
						<RouteWrapper
							path="/details"
							component={Details}
							layout={Ui}
						/>
						<RouteWrapper
							path="/login"
							component={Login}
							layout={AuthUi}
						/>
					</Switch>
				</Router>
			</div>
		</Provider>
	);
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => (
				<Layout {...props}>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

export default App;
