import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const itineraryConfig = {
  // todo --------------------------------------------------------------------------
  async addItinerary(name, kids_num, adults_num, id_deslocation, num_shares) {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    try {
      const response = await HTTP.post(
        `${API_URL}/add-itineraries`,
        {
          name: name,
          kids_num: kids_num,
          adults_num: adults_num,
          id_deslocation: id_deslocation,
          id_user: user[0].id_user,
          num_shares: num_shares
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

  async addIdentityItinerary(id_identity, id_itinerary) {
    try {
      const response = await HTTP.post(
        `${API_URL}/itineraries_identities`,
        {
          id_identity: id_identity,
          id_itinerary: id_itinerary
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

  async getItineraryLastId() {
    try {
      const response = await HTTP.get(`${API_URL}/itineraries`, {
        headers
      });
      if (response.status == 200) {
        return {
          lastId: response.data,
          resStatus: response.status
        };
      } else {
        return {
          lastId: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },

  //  todo --------------------------------------------------------------------------

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
