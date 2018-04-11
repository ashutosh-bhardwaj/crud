
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addPhone } from '../../redux/actions';
import { notify } from '../../redux/actions/notice';
import { endPoints } from '../../config/routes';

import Form from './Form';

class AddPhone extends Component {

  handleOnClick = (payload) => {
    const { history, addPhone, notify } = this.props;
    addPhone(payload);
    notify({ message: 'Successfully added iPhone' });
    history.push(endPoints.default);
  }

  render() {
    return (<Form action="ADD" handleOnClick={this.handleOnClick} />);
  }
}

const AddPhoneWithRouter = withRouter(AddPhone);

export default connect(null, { addPhone, notify })(AddPhoneWithRouter);
