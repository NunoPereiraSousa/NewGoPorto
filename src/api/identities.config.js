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
  }
};

export default identityConfig;
