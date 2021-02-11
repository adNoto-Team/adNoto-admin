import React, { useContext } from "react";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

import Context from "../../context/context";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import SideMenu from "../SideMenu";

const SideBar = () => {
	const { user } = useContext(Context);

	return (
		<div className={styles.sideBar}>
			<div className={styles.logoContainer}>
				<img style={{ height: 90 }} src={Logo} alt={"logo"} />
			</div>
			<div
				style={{
					marginLeft: 10,
					display: "flex",
					flexDirection: "row",
					alignContent: "center",
				}}
			>
				<Avatar size={40} icon={<UserOutlined />} />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
						marginLeft: 14,
					}}
				>
					<h4
						style={{
							padding: 0,
							margin: 0,
						}}
					>
						{user.username}
					</h4>
					<h4
						style={{
							fontWeight: "200",
							padding: 0,
							margin: 0,
							color: "#aaa",
						}}
					>
						{user.name + " "}
						{user.surname}
					</h4>
				</div>
			</div>

			<div className={styles.text}>-</div>

			<SideMenu />
		</div>
	);
};

export default SideBar;
