import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
import { getRepoResult } from "../../actions";
import { motion } from "framer-motion";
import moment from "moment";

const Repo = () => {
	const dispatch = useDispatch();
	const { repo } = useParams();
	const allReposData = useSelector((state) => {
		const singleRepo = state.allRepoResults.filter(
			(repoData) => repoData.name === repo
		)[0];
		return singleRepo;
	});
	const individualRepoData = useSelector((state) => state.individualRepoResult);

	useEffect(() => {
		dispatch(getRepoResult(allReposData.url));
	}, [repo]);

	return (
		<motion.div
			className="specific-repo-container"
			initial={{
				translateX: "-100%",
			}}
			animate={{
				translateX: "0%",
				transition: { duration: 1.2 },
			}}
			role="main"
		>
			<h2>{individualRepoData.name}</h2>
			<hr />
			<div className="repoStats">
				<div className="stat-item">
					<h3>Description: </h3>
					<p>{individualRepoData.description || "None..."}</p>
				</div>
				<div className="stat-item">
					<h3>Language</h3>
					<p>{individualRepoData.language || "None..."} </p>
				</div>
				<div className="stat-item">
					<h3>Created at</h3>
					<p> {moment(individualRepoData.created_at).format("D-MM-YYYY")}</p>
				</div>
				<div className="stat-item">
					<h3>Fork Count</h3>
					<p>{individualRepoData.forks}</p>
				</div>
				<div className="stat-item">
					<h3>Open Issues</h3>
					<p>{individualRepoData.open_issues}</p>
				</div>
				<div className="stat-item">
					<h3>Watchers</h3>
					<p> {individualRepoData.watchers}</p>
				</div>
				<div className="stat-item">
					<h3>Subscribers</h3>
					<p>{individualRepoData.subscribers_count}</p>
				</div>
				
					<a className="stat-item" href={individualRepoData.html_url} target="_blank">
						View in Github
					</a>
				
			</div>
			<br />
		</motion.div>
	);
};

export default Repo;
