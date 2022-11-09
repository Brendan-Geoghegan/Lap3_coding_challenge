import axios from 'axios';

// User reducer

const loadingUser = () => ({ type: 'LOADING'});

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
                forks: data.forks_count
            }
        })
        }
    });

export const getUserResult = searchTerm => {
    return async dispatch => {
        dispatch(loadingUser(searchTerm));
        try {
            const data = await fetchUserData(searchTerm);
            dispatch(loadUserResult(data))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};

const fetchUserData = async searchTerm => {
    try {
        const userData = await axios.get(`https://api.github.com/users/${searchTerm}`)
        const repoData = await axios.get(`https://api.github.com/users/${searchTerm}/repos`)
        return { userData: userData.data, repoData: repoData.data } ;
    } catch (err) {
        if (data.status === 404) { throw Error('That\'s not a valid capital city!') }
        throw new Error(err.message)
    }
}
