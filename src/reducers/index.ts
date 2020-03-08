import { combineReducers } from "redux";
import { imagesReducer } from "./images";
import { Image } from "../actions";

export interface StoreState {
  images: Image[];
}

export const reducers = combineReducers<StoreState>({
  images: imagesReducer
});
