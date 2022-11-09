const initState = {
    username: "",
    rep_count: 0,
    avatar_url: "",
    url: "",
    followers: 0,
    following: 0,
    organisations: []
};

const userReducer = (state=initState, action) => {
    switch(action.type){
        default:
            return state;
    };
};

export default userReducer;
