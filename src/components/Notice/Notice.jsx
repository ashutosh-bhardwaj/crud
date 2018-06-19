import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
        action={[
          <Button 
            key="dismiss"
            color="secondary"
            size="small"
            onClick={this.handlerRequestClose}
          >
            dismiss
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handlerRequestClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
        onClose={this.handlerRequestClose}
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