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
  },
  async deleteCategoriesAdmin(deleteCategory) {
    try {
      const response = await HTTP.put(
        `${API_URL}/categories/delete/${deleteCategory}`,
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
  async addCategoriesAdmin(category_name, photo) {
    try {
      const response = await HTTP.post(
        `${API_URL}/add-categories`,
        {
          category_name: category_name,
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
      localStorage.setItem("error", JSON.stringify(err.response));
      return err;
    }
  }
};

export default categoryConfig;
