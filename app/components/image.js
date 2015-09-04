import React, {Component} from 'react';

const CLASS_NAME = 'image';

class ImageComponent extends Component {

  render() {
    const {image} = this.props;
    return (
      <div className={CLASS_NAME} draggable="true" onClick={this.onClick.bind(this)}>
        <img src={image} title={image} width="100" draggable="false" />
      </div>
    );
  }

  onClick() {
    window.alert(this.props.image)
  }
}

export default ImageComponent;