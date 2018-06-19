import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    const { id } = match.params;
    const selectedPhone = phones.filter(phone => phone.id === id * 1).pop();

    this.setState({ phone: selectedPhone });
  }

  handleClickOnDelete() {
    const { history } = this.props;
    const { id } = this.state.phone;
    this.props.removePhone(id);
    this.props.notify({ message: 'Deleted Successfully!' });
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
      <div style={{ flexGrow: 1 }}>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <Card style={{ maxWidth: '414px' }}>
              <CardMedia>
                <img
                  src={PHONE}
                  alt="iphone"
                  style={{ height: '50%', width: '100%' }}
                />
              </CardMedia>
              <CardContent>
                <Typography component="h2" color="primary" variant="title" gutterBottom>
                  {model}
                </Typography>
                <Typography component="h3" color="secondary" variant="subheading" gutterBottom>
                  $ {price}
                </Typography>
                <Typography component="p" color="textSecondary" variant="subheading" gutterBottom>
                  {`It's an ${status} iphone`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="raised"
                  color="secondary"
                  onClick={this.handleClickOnEdit}
                >
                  Edit
                </Button>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={this.handleClickOnDelete}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

PhoneDetail.propTypes = {
  match: PropTypes.object.isRequired,
  phones: PropTypes.array.isRequired,
  removePhone: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const PhoneDetailWithRouter = withRouter(PhoneDetail);

const mapStateToProps = state => ({
  phones: state.phones,
});

export default connect(mapStateToProps, { removePhone, notify })(PhoneDetailWithRouter);
