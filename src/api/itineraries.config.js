import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const itineraryConfig = {
  async getAllItineraries() {
    try {
      const response = await HTTP.get(`${API_URL}/itineraries`, {
        headers
      });
      if (response.status == 200) {
        return {
          itineraries: response.data,
          resStatus: response.status
        };
      } else {
        return {
          itineraries: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },
  async deleteRoutesAdmin(deleteRouteId) {
    try {
      const response = await HTTP.put(
        `${API_URL}/itineraries/delete/${deleteRouteId}`,
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
  async getAllFullItineraries() {
    try {
      const response = await HTTP.get(`${API_URL}/fullItineraries`, {
        headers
      });
      if (response.status == 200) {
        return {
          itineraries: response.data,
          resStatus: response.status
        };
      } else {
        return {
          itineraries: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  }
};

export default itineraryConfig;
