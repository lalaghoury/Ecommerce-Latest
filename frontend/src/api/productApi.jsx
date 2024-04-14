import axios from "axios";
import { message } from "antd";

axios.defaults.baseURL = "http://localhost:5000";

export const productApi = {
  getAllProducts: async (url, showMsg = true, showErr = true) => {
    try {
      const { data } = await axios.get(url);
      if (data.success) {
        if (showMsg) message.success(data.message);
        return data.products;
      }
    } catch (error) {
      if (showErr) message.error(error.response.data.message);
      console.error("Error fetching products:", error.response.data);
    }
  },
};
