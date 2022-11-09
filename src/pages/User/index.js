import React from "react";
import { BackButton, Profile } from "../../components";
import { useSelector } from "react-redux";
import loadingGif from "./loading.gif";
import { RepoList } from "../../components";

const User = () => {
	const loading = useSelector((state) => state.loading);

	return (
		<>
			<BackButton />
			<br />
			{loading ? (
				<img src={loadingGif} alt="Loading" />
			) : (
				<>
					<Profile />
					<RepoList />
				</>
			)}
		</>
	);
};

export default User;
