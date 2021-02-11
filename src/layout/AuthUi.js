import React from "react";

import HeaderAuth from "../components/HeaderAuth";
import styles from "./style.module.css";

const AuthUi = ({ children }) => {
	return (
		<div className={styles.background}>
			<HeaderAuth />
			<div className={styles.cont}>{children}</div>
		</div>
	);
};

export default AuthUi;
