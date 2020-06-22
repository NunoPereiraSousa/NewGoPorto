import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const notificationConfig = {
  // *"Remove" notification
  async removeNotification(id_notif) {
    alert(id_notif);
    try {
      const response = await HTTP.put(
        `${API_URL}/notifications/update`,
        {
          id_notif: id_notif
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
  // *"create a new notification"
  async addNotification(id_user, id_suggestion, answer) {
    // let identity_id = JSON.parse(localStorage.getItem("identity_id"));

    try {
      const response = await HTTP.post(
        `${API_URL}/add-notifications`,
        {
          id_user: id_user,
          id_suggestion: id_suggestion,
          answer: answer
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

  //*Get all not reader notification by user id
  async getAllNotificationByUserId() {
    let user = JSON.parse(localStorage.getItem("loggedUser"));

    try {
      const response = await HTTP.get(
        `${API_URL}/notifications/${user[0].id_user}`,
        {
          headers
        }
      );
      if (response.status == 200) {
        return {
          notifications: response.data,
          resStatus: response.status
        };
      } else {
        return {
          notifications: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  }
};

export default notificationConfig;
