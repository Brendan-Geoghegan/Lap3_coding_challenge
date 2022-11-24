import axios from 'axios';

// User data

const loadingUser = () => ({ type: 'LOADING_USER'});

const loadUserResult = ({ userData, repoData }) => ({
    type: 'LOAD_USER_RESULT',
    payload: {
        userData: {
            login: userData.login,
            rep_count: userData.public_repos,
            avatar_url: userData.avatar_url,
            url: userData.url,
            followers: userData.followers,
            following: userData.following,
        },
        repoData: repoData.map(data => {
            return {
                name: data.name,
                url: data.url,
                html_url: data.html_url,
                forks: data.forks_count
            }
        })
        }
    });

export const getUserResult = searchTerm => {
    return async dispatch => {
        dispatch(loadingUser());
        try {
            const data = await fetchUserData(searchTerm);
            dispatch(loadUserResult(data))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR' })
        };
    };
};

const fetchUserData = async searchTerm => {
    try {
        const userData = await axios.get(`https://api.github.com/users/${searchTerm}`)
        const repoData = await axios.get(`https://api.github.com/users/${searchTerm}/repos`)
        return { userData: userData.data, repoData: repoData.data } ;
    } catch (err) {
        if (data.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}

// individual repo data

const loadingRepo = () => ({ type: 'LOADING_REPO'});

const loadRepoResult = (individualRepoData) => ({
    type: 'LOAD_REPO_RESULT',
    payload: {
        individualRepoData: {
            name: individualRepoData.name,
            html_url: individualRepoData.html_url,
            description: individualRepoData.description,
            created_at: individualRepoData.created_at,
            language: individualRepoData.language,
            forks: individualRepoData.forks,
            open_issues: individualRepoData.open_issues,
            topics: individualRepoData.topics,
            watchers: individualRepoData.watchers,
            subscribers_count: individualRepoData.subscribers_count
        }
    }
    });

export const getRepoResult = searchTerm => {
    return async dispatch => {
        dispatch(loadingRepo());
        try {
            const data = await fetchRepoData(searchTerm);
            dispatch(loadRepoResult(data.data))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};

const fetchRepoData = async searchTerm => {
    try {
        const repoData = await axios.get(`${searchTerm}`)
        return repoData ;
    } catch (err) {
        if (data.status === 404) { throw Error('That\'s not a valid repo!') }
        throw new Error(err.message)
    }
}
