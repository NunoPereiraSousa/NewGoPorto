import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

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
    } catch (err) {
      return err;
    }
  },
  async signUp(name, username, email, password) {
    alert(headers);
    alert(name);
    alert(username);
    alert(email);
    alert(password);
    try {
      const response = await HTTP.post(
        `${API_URL}/register`,
        {
          name: name,
          username: username,
          password: password,
          email: email
        },
        {
          headers
        }
      );
      return {
        resStatus: response.status
      };
    } catch (err) {
      alert(err);
    }
  }
};

export default userConfig;
