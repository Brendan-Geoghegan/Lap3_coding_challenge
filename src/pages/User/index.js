import React from "react";
import { BackButton, Profile, RepoList } from "../../components";
import { useSelector } from "react-redux";
import loadingGif from "./loading.gif";

const User = () => {
	const loading = useSelector((state) => state.loading);

	return (
		<>
			<BackButton />
			<br />
			{loading ? <img src={loadingGif} alt="Loading" /> : <Profile />}
      <RepoList />
		</>
	);
};

export default User;
