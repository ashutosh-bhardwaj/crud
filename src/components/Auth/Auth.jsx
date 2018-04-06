import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { logIn } from '../../redux/actions';

import { endPoints } from '../../config/routes';

import './Auth.css';

const user = {
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
  }

  isFieldsValid() {
    const { field, error } = this.state;

    if (field.email === '') {
      error.email = 'It looks like you forgot email!';
    }
    if (field.password === '') {
      error.password = 'You can tell us the password!';
    }
    if (field.email !== '' && field.email !== user.email) {
      field.email = '';
      error.email = 'Wrong Email';
    }
    if (field.password !== '' && field.password !== user.password) {
      field.password = '';
      error.password = 'Wrong Password';
    }
    if (field.email === user.email && field.password === user.password) {
      return true;
    }
    this.setState({ field, error });
    return false;
  }

  handleClick = () => {
    const isValid = this.isFieldsValid();

    if (isValid) {
      this.props.logIn();
      this.setState({ loggedIn: true });
    }
  }

  handleEmailChange = (event) => {
    const { field, error } = this.state;
    this.setState({
      field: { email: event.target.value, password: field.password },
      error: { email: '', password: error.password },
    });
  };

  handlePasswordChange = (event) => {
    const { field, error } = this.state;
    this.setState({
      field: { password: event.target.value, email: field.email },
      error: { password: '', email: error.email },
    });
  }

  render() {
    const { field, error } = this.state;
    const { loggedIn } = this.props;
    if (loggedIn) {
      return (
        <Redirect to={endPoints.default} />
      )
    } else {
      return (
        <div className="container">
          <Paper className="item" style={styles.formStyle} zDepth={2}>
            <h2 style={{ fontWeight: '200', color: '#939393', marginTop: '10px' }}>
              Complete your registeration.
          </h2>
            <p style={{ color: '#a3a3a3' }}>
              Fill in the information to complete your registeration.
          </p>
            <br />
            <br />
            <TextField
              hintText="Email"
              errorText={error.email}
              value={field.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <br />
            <TextField
              hintText="Password"
              type="password"
              errorText={error.password}
              value={field.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            <RaisedButton
              label="Log In"
              primary
              onClick={this.handleClick}
            />
          </Paper>
          <Paper className="item" zDepth={2}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={require('../../images/photo.jpg')}
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