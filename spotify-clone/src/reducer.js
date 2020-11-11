export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
};

const reducer = (state, action) => {
    console.log(action);

    // action has 2 things: type and [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                // keep whatever in the current state
                ...state,
                user: action.user

            }
    }
}

export default reducer;