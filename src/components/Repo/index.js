import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";
import { getRepoResult } from "../../actions";
import { motion } from "framer-motion";
import moment from 'moment';

const Repo = () => {
	const dispatch = useDispatch()
	const { repo } =useParams()
	const allReposData = useSelector((state) => {
		const singleRepo = state.allRepoResults.filter(repoData => repoData.name === repo)[0]
		return singleRepo
	});
	const individualRepoData = useSelector(state => state.individualRepoResult)
	console.log(individualRepoData);

	useEffect(() => {
		dispatch(getRepoResult(allReposData.url))
	}, [repo])

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
		>
			<h2>{individualRepoData.name}</h2>
			<hr />
			<div className="repoStats">
				<p>Description: {individualRepoData.description}</p>
				<p>Created at: {moment(individualRepoData.created_at).format('D-MM-YYYY')}</p>
				<p>Language: {individualRepoData.language}</p>
				<p>Fork count: {individualRepoData.forks}</p>
				<p>Open issues: {individualRepoData.open_issues}</p>
				<p>Watchers: {individualRepoData.watchers}</p>
				<p>Subscribers: {individualRepoData.subscribers_count}</p>
				<a href={individualRepoData.html_url}>View in Github</a>
			</div>
			{/* Map over data here*/}
			<br />
		</motion.div>
	);
};

export default Repo;


// name: "",
//         html_url: "",
//         description: "",
//         created_at: "",
//         language: "",
//         forks: 0,
//         open_issues: 0,
//         topics: [],
//         watchers: 0,
//         subscribers_count: 0
