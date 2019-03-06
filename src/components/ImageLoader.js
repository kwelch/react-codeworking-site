import React, { PureComponent } from 'react'
import Loader from "./Loader";

export default class ImageLoader extends PureComponent {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate() {
    this.loadImage();
  }

  loadImage = () => {
    if (this.props.src) {
      this.loader = new window.Image();
      this.loader.onload = () => this.setState({ loaded: true });
      this.loader.src = this.props.src;
    }
  };
  componentWillUnmount() {
    this.loader.onload = () => {};
  }
  render() {
    return this.state.loaded ? (
      <img className={this.props.className} alt="" src={this.props.src} />
    ) : (
      <Loader />
    );
  }
}