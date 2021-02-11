import React from "react";

import Container from "../../components/Container";
import Button from "../../components/Button";

const Help = () => {
	return (
		<div>
			<Container>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<div>
						<h3>Değerli müşterimiz, </h3>
						Sizin için hazırladığımız kampyanyalar pek yakkında
						sizlerle!
					</div>
					<div style={{ alignSelf: "center", justifySelf: "center" }}>
						<Button>Talep Oluştur</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Help;
