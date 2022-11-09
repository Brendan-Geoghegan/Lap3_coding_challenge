import React from "react";
import { UserForm } from "../../components";
import image from "./github.png";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="main-container"
			initial={{
				top: "-20%",
				boxShadow: "0 0 0 rgb(240, 240, 240, 0)",
			}}
			animate={{
				top: "50%",
				boxShadow: "6px 6px 0 rgb(240, 240, 240)",
				transition: { duration: 1.2 },
			}}
			whileHover={{
				backgroundColor: "#11151a",
				boxShadow: "10px 10px 0 rgb(240, 240, 240)",
			}}
		>
			<h1>GitHub Repo Tracker</h1>
			<img src={image} alt="GitHub logo" />
			<UserForm />
		</motion.div>
	);
};

export default Home;
