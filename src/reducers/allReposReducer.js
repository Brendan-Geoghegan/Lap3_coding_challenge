const initState = [{
    name: "",
    url: "",
    stars: 0,
    forks: 0
}];

const allReposReducer = (state=initState, action) => {
    switch(action.type){
        default:
            return state;
    };
};

export default allReposReducer;
