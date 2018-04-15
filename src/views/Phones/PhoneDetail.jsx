import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { removePhone } from '../../redux/actions';
import { notify } from '../../redux/actions/notice';
import { endPoints } from '../../config/routes';
import { PHONE } from '../../lib/constants';

class PhoneDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: {} };
    this.handleClickOnDelete = this.handleClickOnDelete.bind(this);
    this.handleClickOnEdit = this.handleClickOnEdit.bind(this);
  }

  componentWillMount() {
    const { match, phones } = this.props;
    const id = match.params.id;
    const selectedPhone = phones.filter(phone => phone.id === id * 1).pop();

    this.setState({ phone: selectedPhone });
  }

  handleClickOnDelete() {
    const { removePhone, history, notify } = this.props;
    const { id } = this.state.phone;
    removePhone(id);
    notify({ message: 'Deleted Successfully!' });
    history.push(endPoints.default);
  }

  handleClickOnEdit() {
    const { history } = this.props;
    const { id } = this.state.phone;
    history.push(`${endPoints.phoneEdit}/${id}`);
  }

  render() {
    const { model, price, status } = this.state.phone;
    return (
      <Card>
        <CardMedia>
          <img
            src={PHONE}
            alt="iphone"
            style={{ height: '100%' }}
          />
        </CardMedia>
        <CardTitle title={model} />
        <CardText>$ {price}</CardText>
        <CardText>${`It's an ${status} iphone`}</CardText>

        <CardActions>
          <RaisedButton
            label="Edit"
            backgroundColor="#2ecc71"
            labelColor="#fff"
            onClick={this.handleClickOnEdit}
          />
          <RaisedButton
            label="Delete"
            backgroundColor="#c0392b"
            labelColor="#fff"
            onClick={this.handleClickOnDelete}
          />
        </CardActions>
      </Card>
    );
  }
}

const PhoneDetailWithRouter = withRouter(PhoneDetail);

const mapStateToProps = state => ({
  phones: state.phones,
});

export default connect(mapStateToProps, { removePhone, notify })(PhoneDetailWithRouter);
