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
  async addItinerary(name, kids_num, adults_num, id_deslocation) {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    try {
      const response = await HTTP.post(
        `${API_URL}/add-itineraries`,
        {
          name: name,
          kids_num: kids_num,
          adults_num: adults_num,
          id_deslocation: id_deslocation,
          id_user: user[0].id_user
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

  async addIdentityItinerary(id_itinerary, id_identity) {
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
      // localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  },

  async getItineraryLastId() {
    try {
      const response = await HTTP.get(`${API_URL}/itineraries-lastId`, {
        headers
      });
      if (response.status == 200) {
        return {
          itinerary: response.data,
          resStatus: response.status
        };
      } else {
        return {
          itinerary: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(500));
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
      localStorage.setItem("error", JSON.stringify(500));
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
      // localStorage.setItem("error", JSON.stringify(500));
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
      localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  },

  async getAllFollowedItinerary() {
    try {
      const response = await HTTP.get(`${API_URL}/followedItineraries`, {
        headers
      });
      if (response.status == 200) {
        return {
          followedItinerary: response.data,
          resStatus: response.status
        };
      } else {
        return {
          followedItinerary: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  },

  // async getAllFollowedItineraryByUser() {},

  async addFollowedIItinerary(id_itinerary) {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    try {
      const response = await HTTP.post(
        `${API_URL}/add-followedItineraries`,
        {
          id_user: user[0].id_user,
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
      // localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  },

  async removeFollowed(id_itinerary) {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    try {
      const response = await HTTP.put(
        `${API_URL}/followedItineraries/delete`,
        {
          id_user: user[0].id_user,
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
      // localStorage.setItem("error", JSON.stringify(500));
      return err;
    }
  }
};

export default itineraryConfig;
