import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const RepoList = () => {
	const allReposData = useSelector((state) => state.allRepoResults);
	return (
		<div>
			<h2>RepoList</h2>
			<div className="all-repos">
				{allReposData.map((repo, index) => (
					<div className="all-repos-item" key={index}>
						<a>{repo.name}</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default RepoList;
