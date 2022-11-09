import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../../layouts";
import { Home, NotFound, User } from "../../pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="user" element={<User />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
