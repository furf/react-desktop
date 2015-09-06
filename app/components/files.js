import React, {Component} from 'react';
import _ from 'lodash';
import moment from 'moment';

const CLASS_NAME = 'files';

class FilesComponent extends Component {

  constructor(props: all) {
    super(props);
    this.state = {
      property: 'path',
      ascending: true,
    };
  }

  setSort(property) {
    if (property === this.state.property) {
      this.setState({
        ascending: !this.state.ascending,
      });
    } else {
      this.setState({
        property,
        ascending: true,
      });
    }
  }

  render() {

    const {files} = this.props;
    const order = this.state.ascending ? 'asc' : 'desc';
    const sorted = _.sortByOrder(files, this.state.property, order);

    return (
      <table className={CLASS_NAME}>
        <thead>
          <tr>
            <th onClick={this.setSort.bind(this, 'path')}>Path</th>
            <th onClick={this.setSort.bind(this, 'ctime')}>Modified</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(file => (
            <tr key={file.path}>
              <td>{file.path}</td>
              <td>{moment(file.ctime).fromNow()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default FilesComponent;
