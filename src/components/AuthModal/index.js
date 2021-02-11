import React, { useState } from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";
import Box from "../Box";

function AuthModal({ children, complete, cb }) {
	const [myFile, setFile] = useState(undefined);
	const [open, setOpen] = React.useState(false);
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			closeIcon
			open={open}
			trigger={
				<button
					style={{
						display: "flex",
						borderWidth: 1,
						padding: 20,
						margin: 5,
						alignContent: "center",
						justifyContent: "center",
						flex: 1,
						border: "dotted",
						borderColor: complete === true ? "green" : "red",
						backgroundColor: "#fff",
					}}
				>
					<Box complete={complete}>{children}</Box>
				</button>
			}
			header={children}
			actions={[
				"İptal",
				{ key: "done", content: "Gönder", positive: true },
			]}
		>
			{" "}
			<Header icon="archive" content={children} />
			<Modal.Content>
				<div>
					<input
						type={"file"}
						style={{ width: "100%" }}
						onChange={(a) => {
							const file = Array.prototype.slice.call(
								a.target.files
							);
							setFile(file);
						}}
					/>
				</div>
			</Modal.Content>
			<Modal.Actions>
				<Button color="red" onClick={() => setOpen(false)}>
					<Icon name="remove" /> No
				</Button>
				<Button
					color="green"
					onClick={() => {
						if (myFile) {
							cb(myFile);
						}
						setOpen(false);
					}}
				>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default AuthModal;
