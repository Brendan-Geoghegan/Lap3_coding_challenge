import React from "react";
import { BackButton, Profile, RepoList, Repo } from "../../components";
import { useSelector } from "react-redux";
import loadingGif from "./loading.gif";
import { motion } from "framer-motion";
import "./style.css";

const User = () => {
	const loadingUser = useSelector((state) => state.loadingUser);

	return (
		<>
			<BackButton />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 1 } }}
				exit={{ opacity: 0 }}
				className="user-container"
			>
				<br />

				{loadingUser ? (
					<img src={loadingGif} alt="Loading" />
				) : (
					<>
						<Profile />
						<div>
							<RepoList />
							<Repo />
						</div>
					</>
				)}
			</motion.div>
		</>
	);
};

export default User;
