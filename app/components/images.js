import React, {Component} from 'react';
import ImageComponent from './image';

const CLASS_NAME = 'images';

class ImagesComponent extends Component {

  render() {
    const {images} = this.props;
    return (
      <div className={CLASS_NAME}>
        {images.map(image =>
          <ImageComponent key={image} image={image} />
        )}
      </div>
    );
  }
}

export default ImagesComponent;