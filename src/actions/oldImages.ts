import axios from "axios";
import { Dispatch } from "redux";

const url = "";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: "FETCH_IMAGES",
      payload: response.data
    });
  };
};
