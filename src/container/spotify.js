//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "fdbe0b0ca4b04969b763784a57136469";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//https://accounts.spotify.com/authorize?client_id=fdbe0b0ca4b04969b763784a57136469&redirect_uri=https://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true

export const getResponseToken = () => {
  if (typeof window.location.hash) {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  }
};
