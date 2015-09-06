import React, {Component} from 'react';
import FileComponent from './file';

const CLASS_NAME = 'files';

class FilesComponent extends Component {

  render() {
    const {files} = this.props;
    return (
      <div className={CLASS_NAME}>
        {files.map(file =>
          <FileComponent key={file.path} file={file} />
        )}
      </div>
    );
  }
}

export default FilesComponent;
