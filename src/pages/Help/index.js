import React, { useContext, useState } from "react";

import Container from "../../components/Container";
import Button from "../../components/Button";
import { Input } from "antd";
import Context from "../../context/context";

const InputField = ({ cb, name }) => {
	return (
		<Input
			onChange={cb}
			size="large"
			placeholder={"Enter " + name}
			style={{
				borderRadius: 20,
				padding: 15,
				fontSize: 20,
				fontWeight: "700",
			}}
		/>
	);
};

const Episode = ({ value, epSetData }) => {
	return (
		<div>
			<h4>Episode</h4>
			<InputField
				name={"Name"}
				cb={(e) => {
					epSetData({ ...value, name: e.target.value });
				}}
			/>
			<InputField
				name={"Desc"}
				cb={(e) => {
					epSetData({ ...value, desc: e.target.value });
				}}
			/>
			<InputField
				name={"Episode Number"}
				cb={(e) => {
					epSetData({ ...value, episodeNumber: e.target.value });
				}}
			/>
			<InputField
				name={"Air Date"}
				cb={(e) => {
					epSetData({ ...value, airDate: e.target.value });
				}}
			/>
		</div>
	);
};

const Season = ({ value, setData }) => {
	return (
		<div style={{ marginLeft: 50, marginBottom: 20, marginTop: 10 }}>
			<h3>Season</h3>
			<InputField
				name={"season name"}
				cb={(e) => {
					setData({ ...value, name: e.target.value });
				}}
			/>
			<InputField
				name={"season number"}
				cb={(e) => {
					setData({ ...value, seasonNumber: e.target.value });
				}}
			/>
			<div style={{ marginLeft: 15 }}>
				{value.episodes.map((episode, i) => {
					return (
						<Episode
							epSetData={(values) => {
								setData({
									...value,
									episodes: value.episodes.map((a, j) =>
										i === j ? { ...a, ...values } : a
									),
								});
							}}
						/>
					);
				})}
			</div>
			<button
				onClick={() => {
					setData({
						...value,
						episodes: [...value.episodes, { picture: "null" }],
					});
				}}
			>
				new Episode
			</button>
		</div>
	);
};

const Help = () => {
	const [contentState, setContentState] = useState({});
	const [seasonState, setSeasonState] = useState([]);

	const { newContent } = useContext(Context);
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
						<h3>Taleplerim</h3>
						Hesabınızdaki en son etkinlik geçmişi aşağıda
						gösterilmektedir!
					</div>
					<div style={{ alignSelf: "center", justifySelf: "center" }}>
						<Button>Talep Oluştur</Button>
					</div>
				</div>
				{JSON.stringify({
					...contentState,
					avatar: "null",
					thumbnail: "null",
					seasons: seasonState,
				})}
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<InputField
						name={"name"}
						cb={(e) => {
							setContentState((contnt) => {
								contnt.name = e.target.value;
								return contnt;
							});
						}}
					/>
					<InputField
						name={"desc"}
						cb={(e) => {
							setContentState((contnt) => {
								contnt.desc = e.target.value;
								return contnt;
							});
						}}
					/>
					<InputField
						name={"director"}
						cb={(e) => {
							setContentState((contnt) => {
								contnt.director = e.target.value;
								return contnt;
							});
						}}
					/>
					<InputField
						name={"trailer"}
						cb={(e) => {
							setContentState((contnt) => {
								contnt.trailer = e.target.value;
								return contnt;
							});
						}}
					/>
					<InputField
						name={"start date"}
						cb={(e) => {
							setContentState((contnt) => {
								contnt.startDate = e.target.value;
								return contnt;
							});
						}}
					/>
					<InputField
						name={"end date"}
						cb={(e) => {
							setContentState((contnt) => {
								contnt.endDate = e.target.value;
								return contnt;
							});
						}}
					/>
					<InputField
						name={"imbd score"}
						cb={(e) => {
							setContentState((contnt) => {
								contnt.imbdScore = e.target.value;
								return contnt;
							});
						}}
					/>
				</form>
				<div>
					{seasonState.map((aSeason, i) => {
						return (
							<div key={i}>
								<Season
									value={aSeason}
									setData={(values) =>
										setSeasonState((a) => {
											return a.map((b, j) =>
												j === i
													? { ...b, ...values }
													: b
											);
										})
									}
								/>
							</div>
						);
					})}
				</div>
				<button
					onClick={() => {
						setSeasonState((a) => {
							return [...a, { episodes: [] }];
						});
					}}
				>
					Add Season
				</button>
				<button
					onClick={() => {
						newContent({
							...contentState,
							avatar: "null",
							thumbnail: "null",
							seasons: seasonState,
						});
					}}
				>
					Submit
				</button>
			</Container>
		</div>
	);
};

export default Help;
