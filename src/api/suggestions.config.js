import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const suggestionConfig = {
  // *"updates" suggestions
  async updateSuggestion(id_suggestion, id_status) {
    try {
      const response = await HTTP.put(
        `${API_URL}/suggestions/update/${id_suggestion}`,
        {
          status: id_status
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
  },

  //*Get all not reader notification by user id
  async getAllSuggestions() {
    try {
      const response = await HTTP.get(`${API_URL}/suggestions`, {
        headers
      });
      if (response.status == 200) {
        return {
          suggestions: response.data,
          resStatus: response.status
        };
      } else {
        return {
          suggestions: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  }
};

export default suggestionConfig;
