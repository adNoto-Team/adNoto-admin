import React, { useContext, useEffect, useCallback } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../App.css";
import Context from "../context/context";
import { useHistory } from "react-router-dom";
import Support from "../components/Support";

const Ui = ({ children }) => {
	const { token } = useContext(Context);
	let history = useHistory();
	const callback = useCallback(() => {
		if (!token) {
			history.push("/login");
		}
	}, [token, history]);
	useEffect(() => {
		callback();
	}, [callback]);
	return (
		<div className="App">
			<SideBar />
			<Support />

			<div className={"AppContainer"}>
				<Header />
				<div className="Screen">{children}</div>
			</div>
		</div>
	);
};

export default Ui;
