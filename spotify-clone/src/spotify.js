// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


// when user clicks on signiin button => redirect to spotify authentication page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// after signin => redirect back to localhost homepage
const redirectUri = "http://localhost:3000/";

const clientId = "2c401f6dec1b4c1598643bbb4593cf70";

// using spotify api to use this fxns
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    