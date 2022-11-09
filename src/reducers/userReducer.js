const initState = {
    userResults: {
        login: "",
        rep_count: 0,
        avatar_url: "",
        url: "",
        followers: 0,
        following: 0,
        
    },
    allRepoResults: [{
        name: "",
        url: "",
        forks: 0
    }],
    individualRepoResult: {
        name: "",
        html_url: "",
        description: "",
        created_at: "",
        language: "",
        forks: 0,
        open_issues: "",
        topics: "",
        watchers: 0,
        subscribers_count: 0
    },
    loading: false,
    error: false
};

const userReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: true };
        case 'LOAD_USER_RESULT':
            return { ...state, userResults: action.payload.userData, allRepoResults: action.payload.repoData, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    };
};

export default userReducer;
