import React from 'react'
import { useSelector } from 'react-redux'

const RepoList = () => {
  const repos = useSelector(prev => prev.allRepoResults)
  console.log(repos);
  console.log(repos.length);
  return (
    <div id='repoList'>
      <h2>Repositories</h2>
      <br/>
      <div id='repos'>
        <div id='repo'>
          <h3>Repo Name</h3>
          <a href='https://github.com/' target='_blank'>link</a>
          <p>forks</p>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default RepoList
