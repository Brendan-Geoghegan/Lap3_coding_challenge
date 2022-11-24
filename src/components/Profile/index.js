import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
	const user = useSelector((prev) => prev.userResults);

	useEffect(() => {
		const username = localStorage.getItem("username");
		if (!username) {
			localStorage.setItem("username", user.login);
		}
	}, []);

	return (
		<div role="main" id="profile">
			<img role="img" id="avatar" src={user.avatar_url} alt="Profile Image" />
			<h1 role="heading">{user.login}</h1>
			<p role="section">
				{user.followers} followers • {user.following} following
			</p>
		</div>
	);
};

export default Profile;
