import React, { useContext } from "react";
import { Dropdown } from "semantic-ui-react";
import Context from "../../context/context";
const Support = () => {
	const { user } = useContext(Context);
	return (
		<Dropdown
			text={user.username ? user.username : "User"}
			icon="user"
			floating
			labeled
			button
			className="icon"
		>
			<Dropdown.Menu>
				<Dropdown.Header icon="tags" content="Filter by tag" />
				<Dropdown.Divider />
				<Dropdown.Item
					label={{ color: "red", empty: true, circular: true }}
					text="User details"
				/>
				<Dropdown.Item
					label={{ color: "blue", empty: true, circular: true }}
					text="Announcements"
				/>
				<Dropdown.Item
					label={{ color: "black", empty: true, circular: true }}
					text="Log out"
				/>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Support;
