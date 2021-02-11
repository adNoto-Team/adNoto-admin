import React, { useContext, useEffect } from "react";

import Container from "../../components/Container";
// import Button from "../../components/Button";

import Context from "../../context/context";

import "semantic-ui-css/semantic.min.css";

import AuthModal from "../../components/AuthModal";
const General = () => {
	const {
		website,
		getProfile,
		contents,
		getContents,
		setAvatar,
		setThumbnail,
	} = useContext(Context);

	useEffect(() => {
		getProfile();
		getContents();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{contents.map((content, i) => {
				return (
					<Container>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-around",
							}}
						>
							<div>
								<h3>Avatar</h3>
								<img
									style={{ width: 200 }}
									src={website + content.avatar}
									alt="AvatarPic"
								/>
							</div>
							<div>
								<h3>Thumbnail</h3>
								<img
									style={{ width: 200 }}
									src={website + content.coverPicture}
									alt="Thumbnail"
								/>
							</div>
						</div>

						<br />
						<div>
							<h3>id:{content.id}</h3>
							<h3>name:{content.name}</h3>
							<h3>desc:{content.desc}</h3>
							<h3>trailer:{content.trailer}</h3>
						</div>
						<div style={{ display: "flex", flexDirection: "row" }}>
							<AuthModal
								cb={(file) => {
									setAvatar(file[0], content.id);
								}}
							>
								Set Avatar
							</AuthModal>
							<AuthModal
								cb={(file) => {
									setThumbnail(file[0], content.id);
								}}
							>
								Set Thumbnail
							</AuthModal>
						</div>
					</Container>
				);
			})}
		</div>
	);
};

export default General;
