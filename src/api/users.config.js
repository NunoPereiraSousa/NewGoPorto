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
  async editProfile(name, location, birth, email, photo) {
    try {
      const response = await HTTP.put(
        `${API_URL}/users/update/${user_id[0].id_user}`,
        {
          name: name,
          location: location,
          birth: birth,
          email: email,
          photo: photo
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
  async addPost(userId, content, date) {
    // let dateFormat = date.split("/");
    // date = `${dateFormat[2]}-${dateFormat[1]}-${dateFormat[0]}`;
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
      return {
        resStatus: response.status
      };
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },
  async deletePost(deletePostId) {
    try {
      const response = await HTTP.put(
        `${API_URL}/posts/delete/${deletePostId}`,
        {
          headers
        }
      );
      for (const data in deletePostId) {
        alert(deletePostId[data]);
      }

      return {
        resStatus: response.status
      };
    } catch (err) {
      alert(err);
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },
  async getUserPosts() {
    try {
      const response = await HTTP.get(
        `${API_URL}/posts/${user_id[0].id_user}`,
        {
          headers
        }
      );
      return {
        resStatus: response.status,
        response: response.data
      };
    } catch (err) {
      alert(err);
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },
  async addSuggestion(
    id_user,
    photo,
    content,
    new_identity,
    id_status,
    category_name
  ) {
    alert(
      `id_user: ${id_user} \nphoto: ${photo} \ncontent: ${content} \nnew_identity: ${new_identity} \nid_status: ${id_status} \ncategory_name: ${category_name} \n`
    );
    try {
      const response = await HTTP.post(
        `${API_URL}/add-suggestions`,
        {
          id_user: id_user,
          photo: photo,
          content: content,
          new_identity: new_identity,
          id_status: id_status,
          category_name: category_name
        },
        {
          headers
        }
      );
      return {
        resStatus: response.status
      };
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      alert(err);
      return err;
    }
  },
  async getAllUsers() {
    try {
      const response = await HTTP.get(`${API_URL}/users`, {
        headers
      });
      if (response.status == 200) {
        return {
          users: response.data,
          resStatus: response.status
        };
      } else {
        return {
          users: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  }
};

export default userConfig;
