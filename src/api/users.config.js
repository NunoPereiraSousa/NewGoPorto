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
    } catch (err) {
      return err;
    }
  },
  async signUp(name, username, email, password) {
    try {
      const response = await HTTP.post(
        `${API_URL}/register`,
        {
          name: name,
          username: username,
          email: email,
          password: password
        },
        {
          headers
        }
      );
      return {
        resStatus: response.status
      };
    } catch (err) {
      return err;
    }
  },
  async editProfile(name, location, birth, email) {
    try {
      const response = await HTTP.put(
        `${API_URL}/users/update/${user_id[0].id_user}`,
        {
          name: name,
          location: location,
          birth: birth,
          email: email
        },
        {
          headers
        }
      );
      alert(1);
      return {
        resStatus: response.status
      };
    } catch (err) {
      alert(err);
      return err;
    }
  }
};

export default userConfig;
