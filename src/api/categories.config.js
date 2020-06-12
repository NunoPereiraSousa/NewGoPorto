import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const categoryConfig = {
  async getAllCategories() {
    try {
      const response = await HTTP.get(`${API_URL}/categories`, {
        headers
      });
      if (response.status == 200) {
        return {
          categories: response.data,
          resStatus: response.status
        };
      } else {
        return {
          categories: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  }
};

export default categoryConfig;
