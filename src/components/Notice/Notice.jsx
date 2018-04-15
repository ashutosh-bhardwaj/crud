import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snackbar from 'material-ui/Snackbar';
import { closeNotice } from '../../redux/actions';

class Notice extends Component {
  handlerRequestClose = () => {
    this.props.closeNotice();
  }
  render() {
    const { notification: { open, message } } = this.props;
    return (
      <Snackbar
        open={open}
        message={message}
        action="dismiss"
        onActionClick={this.handlerRequestClose}
        onRequestClose={this.handlerRequestClose}

      />
    );
  }
}

Notice.propTypes = {
  closeNotice: PropTypes.func.isRequired,
  notification: PropTypes.object.isRequired
};

function mapStateToProps({ notification }) {
  return { notification };
}

export default connect(mapStateToProps, { closeNotice })(Notice);