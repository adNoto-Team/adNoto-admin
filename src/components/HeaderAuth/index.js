import React from "react";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

const HeaderAuth = () => {
	return (
		<div className={styles.contAll}>
			<div className={styles.container}>
				<div style={{ marginLeft: 25 }}>
					<img src={Logo} alt={"logo"} />
				</div>
			</div>
		</div>
	);
};

export default HeaderAuth;
