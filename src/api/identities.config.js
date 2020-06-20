import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const identityConfig = {
  async getAllIdentities() {
    try {
      const response = await HTTP.get(`${API_URL}/identities`, {
        headers
      });
      if (response.status == 200) {
        return {
          identities: response.data,
          resStatus: response.status
        };
      } else {
        return {
          identities: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },
  async deleteIdentitiesAdmin(deleteIdentityId) {
    try {
      const response = await HTTP.put(
        `${API_URL}/identities/delete/${deleteIdentityId}`,
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
  async editIdentitiesAdmin(
    editIdentityId,
    name,
    information,
    category_name,
    lat,
    lng,
    image
  ) {
    alert(
      `editIdentityId: ${editIdentityId} \nName: ${name} \ninformation: ${information} \nid_category: ${category_name} \nlat: ${lat} \nlng: ${lng} \nphoto: ${image} `
    );
    try {
      const response = await HTTP.put(
        `${API_URL}/identities/update/${editIdentityId}`,
        {
          editIdentityId: editIdentityId,
          name: name,
          information: information,
          category_name: category_name,
          lat: lat,
          lng: lng,
          image: image
        },
        {
          headers
        }
      );
      return {
        resStatus: response.status
      };
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response));
      return err;
    }
  },
  async addIdentitiesAdmin(name, information, category_name, lat, lng, image) {
    alert(
      `Name: ${name} \ninformation: ${information} \ncategory_name: ${category_name} \nlat: ${lat} \nlng: ${lng} \nphoto: ${image} `
    );
    try {
      const response = await HTTP.post(
        `${API_URL}/add-identities`,
        {
          name: name,
          information: information,
          category_name: category_name,
          lat: lat,
          lng: lng,
          image: image
        },
        {
          headers
        }
      );
      return {
        resStatus: response.status
      };
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response));
      return err;
    }
  },
  async getIdentityById() {
    let identity_id = JSON.parse(localStorage.getItem("identity_id"));
    alert(identity_id);
    try {
      const response = await HTTP.get(`${API_URL}/identities/${identity_id}`, {
        headers
      });
      if (response.status == 200) {
        return {
          identity: response.data,
          resStatus: response.status
        };
      } else {
        return {
          identity: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },

  // Todo -------------------------------

  async getAllFavorites() {
    try {
      const response = await HTTP.get(`${API_URL}/favorites`, {
        headers
      });
      if (response.status == 200) {
        return {
          list: response.data,
          resStatus: response.status
        };
      } else {
        return {
          list: [],
          resStatus: response.status
        };
      }
    } catch (err) {
      localStorage.setItem("error", JSON.stringify(err.response.data.error));
      return err;
    }
  },

  // async getAllFollowedItineraryByUser() {},

  async addFavorite() {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    let identity_id = JSON.parse(localStorage.getItem("identity_id"));

    alert("something " + identity_id);

    try {
      const response = await HTTP.post(
        `${API_URL}/add-favorite`,
        {
          id_user: user[0].id_user,
          id_identity: identity_id
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

  async removeFavorite() {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    let identity_id = JSON.parse(localStorage.getItem("identity_id"));
    try {
      const response = await HTTP.put(
        `${API_URL}/favorites/delete`,
        {
          id_user: user[0].id_user,
          id_identity: identity_id
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
  }
  // Todo -------------------------------
};

export default identityConfig;
