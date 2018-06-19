import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { logIn } from '../../redux/actions';
import { endPoints } from '../../config/routes';
import { BACKGROUND } from '../../lib/constants';
import './Auth.css';

const USER = {
  email: 'ashutosh@hooli.com',
  password: 'reactisawesome',
};

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: { email: '', password: '' },
      error: { email: '', password: '' },
      loggedIn: this.props.loggedIn,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  isFieldsValid() {
    const { field, error } = this.state;

    if (field.email === '') {
      error.email = 'It looks like you forgot email!';
    }
    if (field.password === '') {
      error.password = 'You can tell us the password!';
    }
    if (!field.email && !field.email.trim() && field.email !== USER.email) {
      field.email = '';
      error.email = 'Wrong Email';
    }
    if (!field.password && !field.password.trim() && field.password !== USER.password) {
      field.password = '';
      error.password = 'Wrong Password';
    }
    if (field.email === USER.email && field.password === USER.password) {
      return true;
    }
    this.setState({ field, error });
    this.props.openNotice({ message: `${error.email} / ${error.password}` });
    return false;
  }

  handleClick() {
    const isValid = this.isFieldsValid();
    const { logIn, openNotice } = this.props;
    if (isValid) {
      logIn();
      openNotice({ message: 'Successfully Logged In' });
      this.setState({ loggedIn: true });
    }
  }

  handleEmailChange = event => {
    const { field, error } = this.state;
    this.setState({
      field: { email: event.target.value, password: field.password },
      error: { email: '', password: error.password },
    });
  };

  handlePasswordChange = event => {
    const { field, error } = this.state;
    this.setState({
      field: { password: event.target.value, email: field.email },
      error: { password: '', email: error.email },
    });
  }

  render() {
    const { field } = this.state;
    const { loggedIn } = this.props;

    if (loggedIn) {
      return (
        <Redirect to={endPoints.default} />
      )
    } else {
      return (
        <div className="container">
          <Paper className="item" style={styles.formStyle} elevation={2}>
            <h2 style={{ fontWeight: '200', color: '#939393', marginTop: '10px' }}>
              Complete your sign-in.
            </h2>
            <p style={{ color: '#a3a3a3' }}>
              Fill in the information to complete your sign-in.
            </p>
            <br />
            <br />
            <TextField
              required
              label="Email"
              type="text"
              value={field.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <br />
            <TextField
              required
              label="Password"
              type="password"
              value={field.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            <br />
            <Button
              label="Log In"
              variant="raised"
              color="primary"
              onClick={this.handleClick}
            >
              Login
            </Button>
          </Paper>
          <Paper className="item" elevation={2}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={BACKGROUND}
              alt="beach, waves"
            />
          </Paper>
        </div>

      )
    }
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn
})


export default connect(mapStateToProps, { logIn })(Auth);

const styles = {
  formStyle: {
    padding: '60px',
  },
};