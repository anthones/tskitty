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
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.images.length && this.props.images.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchImage();
    this.setState({ fetching: true });
  };

  onImageClick = (id: number): void => {
    this.props.deleteImage(id);
  };

  renderList(): JSX.Element[] {
    return this.props.images.map((image: Image) => {
      return (
        <div onClick={() => this.onImageClick(image.id)} key={image.id}>
          <img src={image.url} alt={`${image.id}`}></img>
        </div>
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
