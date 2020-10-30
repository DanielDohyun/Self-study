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
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    // initial = initial value of reduce,
    // item = item that we get every time we loops thr

    .reduce((initial, item) => {
        // http://localhost:3000/#access_token=BQBPkqDz5txVtyfrr-VpVM_54disHXyhBozwSeOmJpl07l0EGP2xEwtIBXHVd3b9_PB-rAPKmUBaYdqI4hXYz_kBl1ZJXMgyrfNulBthHsAgyFcNy59nvxU0GG00X8vVdhR4vsiw_40gtesSGzeg6GSlYw&token_type=Bearer&expires_in=3600
        var parts = item.split("=")
        // parts 0 = access token and 1 = actual key
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    