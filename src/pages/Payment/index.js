import React from "react";

import Container from "../../components/Container";
import Button from "../../components/Button";

const Payment = () => {
	return (
		<div>
			<Container>
				<h3>Kredi Kartı</h3>
				Henüz banka / kredi kartı bilgilerinizi bizimle paylaşmadınız!
				<br />
				<br />
				<Button>Ödeme Yöntemi Ekle</Button>
				<hr />
			</Container>
		</div>
	);
};

export default Payment;
