import React from "react";
import { BackButton, Profile, RepoList } from "../../components";
import { useSelector } from "react-redux";
import loadingGif from "./loading.gif";
import { motion } from "framer-motion";

const User = () => {
	const loading = useSelector((state) => state.loading);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0, transition: { duration: 0.1 } }}
		>
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
		</motion.div>
	);
};

export default User;
