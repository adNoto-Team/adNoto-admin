import React, { useEffect, useState, useContext } from "react";
import styles from "./style.module.css";
import DropdownUi from "../Dropdownn";
import Language from "../Language";
import { Header as HeaderAlt } from "semantic-ui-react";
import { Badge, Popover } from "antd";
import { Icon } from "semantic-ui-react";

import Context from "../../context/context";

const Header = () => {
	const { user } = useContext(Context);
	const [reqs, setReqs] = useState([]);
	useEffect(() => {
		setReqs([]);
		if (user.mail === null) {
			setReqs((a) => [...a, "E-Mail"]);
		}
		if (user.gsmNumber === null) {
			setReqs((a) => [...a, "Telefon Numarası"]);
		}
		if (user.tcNo === null) {
			setReqs((a) => [...a, "TC Numarası"]);
		}
	}, [user]);
	const content = (
		<div>
			{reqs.map((val, i) => (
				<div key={i}>{val} paremetresini girmeniz lazım</div>
			))}
		</div>
	);
	return (
		<div className={styles.container}>
			<div className={styles.textElement} style={{ paddingTop: 10 }}>
				<HeaderAlt as="h4">Hesaplar</HeaderAlt>
			</div>

			<div className={styles.textElement}>
				<div style={{ paddingRight: 15 }}>
					<Popover
						content={content}
						title={
							reqs.length > 0
								? `${reqs.length} tane bildiriminiz var`
								: "Bildiriminiz yok."
						}
					>
						<Badge count={reqs.length}>
							<Icon
								name={"bell outline"}
								style={{ fontSize: 25 }}
							/>
						</Badge>
					</Popover>
				</div>
				<div
					style={{
						display: "flex",
						alignContent: "center",
						justifyContent: "center",
					}}
				>
					<Language />
				</div>
				<DropdownUi />
			</div>
		</div>
	);
};

export default Header;
