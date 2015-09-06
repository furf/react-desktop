import React, {Component} from 'react';
import moment from 'moment';

const CLASS_NAME = 'file';

class FileComponent extends Component {

  render() {
    const {file} = this.props;
    return (
      <div className={CLASS_NAME}>
        <strong>{file.path}</strong> (<em>{moment(file.ctime).fromNow()}</em>)
      </div>
    );
  }
}

export default FileComponent;
