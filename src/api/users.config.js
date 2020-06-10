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
  }
};

export default userConfig;
