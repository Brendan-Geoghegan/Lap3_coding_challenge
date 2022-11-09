const initState = {
    name: "",
    html_url: "",
    description: "",
    created_at: "",
    language: "",
    forks: 0,
    open_issues: "",
    topics: "",
    watchers: "",
    subscribers_count: 0
};

const singleRepoReducer = (state=initState, action) => {
    switch(action.type){
        default:
            return state;
    };
};

export default singleRepoReducer;
