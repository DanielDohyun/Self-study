export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,
    token: "BQDFZzdvye5DyF9QEfXLP21hLHKl2ygcRL5dMUU_6m0z7YiIiobdzHHtgD8qJEVn3AG7HX5hGUEggUa0O6SBOCl9ntoU-DoeruQOzrztb2v1DNCn3y2RlsQK0srUaqH9UZ4tWs8kjvf3qKzg-V47Pg-5Uw",
};

const reducer = (state, action) => {
    console.log(action);
    // action has 2 things: type and [payload]
    switch(action.type) {
        case "SET_USER":
            return {
                // keep whatever in the current state
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
};

export default reducer;