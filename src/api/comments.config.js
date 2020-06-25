import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const commentConfig = {
  async getCommentsByIdentityId() {
    let identity_id = JSON.parse(localStorage.getItem("identity_id"));
    try {
      const response = await HTTP.get(`${API_URL}/comments/${identity_id}`, {
        headers
      });
      if (response.status == 200) {
        return {
          comments: response.data,
          resStatus: response.status
        };
      } else {
        return {
          comments: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  },
  async addComment(date_hour, id_user, id_identity, comment_text, num_star) {
    try {
      const response = await HTTP.post(
        `${API_URL}/add-comments`,
        {
          date_hour: date_hour,
          id_user: id_user,
          id_identity: id_identity,
          comment_text: comment_text,
          num_star: num_star
        },
        {
          headers
        }
      );
      return {
        resStatus: response.status
      };
    } catch (err) {
      // localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  }
};

export default commentConfig;
