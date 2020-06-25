import API_URL from "./config";
import axios from "axios";

const HTTP = axios.create({
  baseURL: API_URL
});

let headers = {
  "Access-Control-Allow-Origin": "*"
};

const mainConfig = {
  async numSharesCard(title, author, num_shares) {
    try {
      const response = await HTTP.get(
        `${API_URL}/`,
        { title, author, num_shares },
        {
          headers
        }
      );
      // for (const data of response.data) {
      //   alert(data);
      // }
      return response;

      //   if (response.status == 200) {
      //     return {
      //       token: response.data.token,
      //       loggedUser: response.data.response,
      //       resStatus: response.status
      //     };
      //   } else {
      //     return {
      //       token: "",
      //       loggedUser: "",
      //       resStatus: response.status
      //     };
      //   }
    } catch (err) {
      return err;
    }
  }
};

export default mainConfig;
