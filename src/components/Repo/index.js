import React, { useState } from "react";
import "./style.css";

const Repo = () => {
	const [chosen, setChosen] = useState(false);
	return (
		<div
			class="specific-repo-container"
			style={{ display: chosen ? "block" : "none" }}
		>
			<h2>Repo</h2>
			<hr />
			{/* Map over data here*/}
			<br />
		</div>
	);
};

export default Repo;
