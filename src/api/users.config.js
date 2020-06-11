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
      if (response.status == 201) {
        return {
          resStatus: response.status
        };
      }
    } catch (err) {
      if (err.response.status == 400) {
        return {
          resStatus: {
            status: err.response.status,
            message: err.response.data
          }
        };
      } else if (err.response.status == 500) {
        return {
          resStatus: {
            status: err.response.status,
            message: err.response.data
          }
        };
      } else {
        return {
          resStatus: {
            status: 500,
            message: "Something went wrong, please try again!!"
          }
        };
      }
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
      return {
        resStatus: response.status
      };
    } catch (err) {
      alert(err);
      return err;
    }
  },
  async addPost(userId, content, date, block) {
    alert(`id:${userId}`);
    alert(`text:${content}`);
    alert(`date:${date}`);
    alert(`block:${block}`);
    // 20 - 05 - 1999

    let dateFormat = date.split("/");
    date = `${dateFormat[2]}-${dateFormat[1]}-${dateFormat[0]}`;
    try {
      const response = await HTTP.post(
        `${API_URL}/add-posts`,
        {
          id_user: userId,
          content: content,
          date: date
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
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      // console.log();
      return err;
    }
  }
};

export default userConfig;
