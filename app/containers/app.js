import React, {Component, StyleSheet} from 'react';
import {connect} from 'react-redux';
import FilesComponent from '../components/files';

class AppComponent extends Component {

  render() {
    const {files} = this.props;
    return (
      <FilesComponent files={files} />
    );
  }
}

function select(state) {
  return {
    files: state.files
  };
}

export default connect(select)(AppComponent);
