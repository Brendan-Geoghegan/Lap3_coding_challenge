import React from "react";
import { BackButton, Profile, RepoList } from "../../components";
import { useSelector } from "react-redux";
import loadingGif from "./loading.gif";
import { motion } from "framer-motion";
import "./style.css";

const User = () => {
	const loadingUser = useSelector((state) => state.loadingUser);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0 }}
			className="user-container"
		>
			{/* <BackButton /> */}
			<br />

			{loadingUser ? (
				<img src={loadingGif} alt="Loading" />
			) : (
				<>
					<Profile />
					<RepoList />
				</>
			)}
		</motion.div>
	);
};

export default User;
