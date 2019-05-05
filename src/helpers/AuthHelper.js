import qs from "qs";

class AuthHelper {
  constructor() {
    this.authParams = {
      client_id: process.env.REACT_APP_SPOTIFY_API_CLIENT_ID,
      response_type: "token",
      redirect_uri: process.env.REACT_APP_SPOTIFY_BASE_URL,
      scope: ["playlist-read-private"].join(" ")
    };
  }

  recoverToken = () => {
    const auth = localStorage.getItem("authorization");
    if (auth) {
      return JSON.parse(auth);
    }

    return this.getToken();
  };

  getToken = () => {
    const baseUrl = process.env.REACT_APP_SPOTIFY_ACCOUNTS_BASE_URL;
    const query = qs.stringify(this.authParams);
    window.location.href = `${baseUrl}${query}`;
  };

  resolveTokenURL = () => {
    const query = qs.parse(
      String(window.location)
        .split("#")
        .pop()
        .replace("?", "")
    );

    //TODO - salvar no localStorage e limpar a URL

  };
}

export default AuthHelper;
