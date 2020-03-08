import React from "react";
import { connect } from "react-redux";
import { Image, fetchImage, deleteImage } from "../actions";
import { StoreState } from "../reducers";
import "./App.css";

interface AppProps {
  images: Image[];
  fetchImage: Function;
  deleteImage: typeof deleteImage;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchImage();
  };

  onImageClick = (id: number): void => {
    this.props.deleteImage(id);
  };

  renderList(): JSX.Element[] {
    return this.props.images.map(({ url, id }: Image) => {
      return (
        <img
          src={url}
          alt={`${id}`}
          onClick={() => this.onImageClick(id)}
          key={id}
        ></img>
      );
    });
  }

  render() {
    return (
      <>
        <button onClick={this.onButtonClick}>Fetch</button>
        <div className="image-list">{this.renderList()}</div>
      </>
    );
  }
}

const mapStateToProps = ({ images }: StoreState): { images: Image[] } => {
  return { images };
};

export const App = connect(mapStateToProps, { fetchImage, deleteImage })(_App);
