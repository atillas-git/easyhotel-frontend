import useStore from "@/hooks/useStore";
import axios from "axios";
import { unstable_batchedUpdates } from "react-dom";
import { toast } from "react-toastify";
const RestUtils = {
  post: async (url, payload) => {
    try {
      const res = await axios.post(url, payload);
      return res.data;
    } catch (error) {
      return RestUtils.handleError(error);
    }
  },
  get: async (url) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return RestUtils.handleError(error);
    }
  },
  put: async (url, payload) => {
    try {
      const res = await axios.put(url, payload);
      return res.data;
    } catch (error) {
      return RestUtils.handleError(error);
    }
  },
  delete: async (url, payload) => {
    try {
      const res = await axios.delete(url, payload);
      return res.data;
    } catch (error) {
      return RestUtils.handleError(error);
    }
  },
  handleError: (err) => {
    if (err && err.response.status === 403) {
      unstable_batchedUpdates(() => {
        useStore.getState().logoutClient();
        useStore.getState().unAuthorize();
      });
      return;
    }
    return toast.error(err.response ? err.response.data : err);
  },
};
export default RestUtils;
