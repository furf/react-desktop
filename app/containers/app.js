import React, {Component, StyleSheet} from 'react';
import {connect} from 'react-redux';
import ImagesComponent from '../components/images';

class AppComponent extends Component {

  render() {
    const {images} = this.props;
    return (
      <ImagesComponent images={images} />
    );
  }
}

function select(state) {
  return {
    images: state.images
  };
}

export default connect(select)(AppComponent);
