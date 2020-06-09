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
      const request = await HTTP.post(
        `${API_URL}/login`,
        {
          input: input,
          password: password
        },
        {
          headers
        }
      );
      alert(2);

      localStorage.setItem("token", JSON.stringify(request.data.token));
      localStorage.setItem("loggedUser", JSON.stringify(request.data.response));
    } catch (err) {
      return err;
    }
  }
};

export default userConfig;
