import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updatePhone } from '../../redux/actions';
import { endPoints } from '../../config/routes';
import Form from './Form';

class EditPhone extends Component {

  constructor(props) {
    super(props);
    this.state = { model: '', price: 0, status: '', id: 0 }
  }

  componentWillMount() {
    const { match, phones } = this.props;
    const id = match.params.id;

    const phone = phones.filter(phone => phone.id === id * 1).pop();

    this.setState({ model: phone.model, status: phone.status, price: phone.price, id: phone.id });
  }

  handleOnClick = (payload, id) => {
    const { history, updatePhone } = this.props;
    updatePhone(id, payload);
    history.push(endPoints.default);
  }

  render() {
    return (<Form
      {...this.state}
      action="EDIT"
      handleOnClick={this.handleOnClick}
    />);
  }
}

const EditPhoneWithRouter = withRouter(EditPhone);

const mapStateToProps = (state) => ({
  phones: state.phones
})

const mapDispatchToProps = (dispatch) => ({
  updatePhone: (id, payload) => dispatch(updatePhone(id, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPhoneWithRouter);
