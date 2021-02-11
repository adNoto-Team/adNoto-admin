import React from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Button } from "antd";
const DropdownUi = () => {
	let history = useHistory();
	return (
		<Button
			style={{
				position: "fixed",
				display: "flex",
				bottom: 30,
				right: 30,
				fontSize: 25,
				padding: 20,
				height: 80,
				width: 80,
				borderRadius: 100,
				alignContent: "center",
				justifyContent: "center",
			}}
			onClick={() => {
				history.push("/support");
			}}
		>
			<Icon color={"green"} name="add" />
		</Button>
	);
};

export default DropdownUi;
