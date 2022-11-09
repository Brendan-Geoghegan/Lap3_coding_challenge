import React from "react";
import { UserForm } from "../../components";
import image from "./github.png";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="main-container"
			initial={{ boxShadow: "0 0 0 rgb(240, 240, 240, 0)" }}
			animate={{
				boxShadow: "0 0 60px rgb(240, 240, 240, 0.6)",
				transition: { duration: 1 },
			}}
		>
			<h1>GitHub Repo Tracker</h1>
			<img src={image} alt="GitHub logo" />
			<UserForm />
		</motion.div>
	);
};

export default Home;
