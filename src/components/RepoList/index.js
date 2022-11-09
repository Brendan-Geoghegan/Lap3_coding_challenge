import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const RepoList = () => {

	const allReposData = useSelector((state) => state.allRepoResults);
	return (
		<div id='repoList'>
			<h2>Repositories</h2>
      <br/>
			<div  id='repos'>
				{allReposData.map((repo, index) => (
					<div className='repo' key={index}>
            <h3>{repo.name}</h3>
          <a href={repo.url} target='_blank'>GitHub</a>
          <p>{repo.forks}</p>
          <hr/>
					</div>
				))}
			</div>
		</div>
	);
};

export default RepoList;
