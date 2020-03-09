import { Image, Action, ActionTypes } from "../actions";

export const imagesReducer = (state: Image[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchImages:
      return action.payload;
    case ActionTypes.deleteImage:
      return state.filter(({ id }: Image) => id !== action.payload);
    default:
      return state;
  }
};
