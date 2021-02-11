import React from "react";
import styles from "./style.module.css";

const Button = ({ children, event }) => {
	return (
		<button
			onClick={() => {
				event();
			}}
			className={styles.button}
		>
			{children}
		</button>
	);
};

export default Button;
