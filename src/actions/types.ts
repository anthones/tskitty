import { FetchImageAction, DeleteImageAction } from "./images";

export enum ActionTypes {
  fetchImages,
  deleteImage
}

export type Action = FetchImageAction | DeleteImageAction;
