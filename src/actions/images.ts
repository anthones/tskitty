import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Image {
  id: string;
  url: string;
}

export interface FetchImageAction {
  type: ActionTypes.fetchImages;
  payload: Image[];
}

export interface DeleteImageAction {
  type: ActionTypes.deleteImage;
  payload: string;
}

const url = "https://api.thecatapi.com/v1/images/search?limit=20";

export const fetchImage = () => {
  return async (dispatch: Dispatch<FetchImageAction>) => {
    const response = await axios.get<Image[]>(url);

    dispatch<FetchImageAction>({
      type: ActionTypes.fetchImages,
      payload: response.data
    });
  };
};

export const deleteImage = (id: string): DeleteImageAction => {
  return {
    type: ActionTypes.deleteImage,
    payload: id
  };
};
