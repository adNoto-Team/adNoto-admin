import { createContext, useState } from "react";
import server from "../axios/server";

const Context = createContext(null);

export const Provider = ({ children }) => {
	const [error, setError] = useState("");
	const [token, setToken] = useState(null);
	const [user, setUser] = useState({});
	const [contents, setContents] = useState([]);
	const getUser = async () => {
		if (token && user.username) {
			const resp = await server.get("/user", {
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			setUser(resp.data);
		}
	};

	const login = async (username, password, cb) => {
		setError("");
		const resp = await server.post("/login", { username, password });

		if (resp.data.token) {
			setToken(resp.data.token);
			localStorage.setItem("token", token);

			cb();
		} else {
			setError("Wrong password or username.");
		}
	};
	const signup = async (username, password, cb) => {
		setError("");
		const resp = await server.post("/signin", { username, password });

		if (resp.data.token) {
			setToken(resp.data.token);
			localStorage.setItem("token", token);
			cb();
			setUser(resp.data.data);
		} else {
			setError("Wrong password or username.");
		}
	};
	const getProfile = async () => {
		const myUser = await server.get("/profile", {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		setUser(myUser.data.user);
	};
	const getContents = async () => {
		const contents = await server.get("/feed", {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		if (contents.data) setContents(contents.data);
	};

	const newContent = async (values) => {
		await server.post("/admin/content/all", values, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
	};

	const setAvatar = async (file, id) => {
		const formData = new FormData();
		formData.append("avatarPic", file, file.name);
		const contents = await server.post(
			`/admin/content/img/${id}`,
			formData,
			{
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			}
		);
		console.log(contents);
	};
	const setThumbnail = async (file, id) => {
		const formData = new FormData();
		formData.append("coverPic", file, file.name);
		await server.post(`/admin/content/coverimg/${id}`, formData, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
	};
	const website = "https://api.adnoto.co/";
	const values = {
		setAvatar,
		setThumbnail,
		website,
		login,
		token,
		error,
		setError,
		signup,
		getUser,
		user,
		setToken,
		getContents,
		contents,
		getProfile,
		newContent,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Context;
