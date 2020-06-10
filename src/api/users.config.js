import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

let user_id = JSON.parse(localStorage.getItem("loggedUser"));

const userConfig = {
  async signIn(input, password) {
    try {
      const response = await HTTP.post(
        `${API_URL}/login`,
        {
          input: input,
          password: password
        },
        {
          headers
        }
      );

      if (response.status == 200) {
        return {
          token: response.data.token,
          loggedUser: response.data.response,
          resStatus: response.status
        };
      } else {
        return {
          token: "",
          loggedUser: "",
          resStatus: response.status
        };
      }

      // localStorage.setItem("token", JSON.stringify(response.data.token));
      // localStorage.setItem("loggedUser", JSON.stringify(response.data.response));
    } catch (err) {
      return err;
    }
  },
  async profileData(username, birth, location, email) {
    const response = await HTTP.get(
      `${API_URL}/users/${user_id[0].id_user}`,
      {
        username: username,
        birth: birth,
        location: location,
        email: email
      },
      {
        headers
      }
    );
    return response;
  }
};

export default userConfig;
