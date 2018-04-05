import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { logIn } from '../../redux/actions';

import './Auth.css';

const user = {
  email: 'ashutosh@hooli.com',
  password: 'reactisawesome',
};

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailErrorMessage: '',
      passwordErrorMessage: '',
      loggedIn: this.props.loggedIn,
    };
  }

  handleClick = () => {
    const { email, password } = this.state;
    if (email === '') {
      this.setState({ emailErrorMessage: 'It looks like you forgot email!' });
    }
    if (password === '') {
      this.setState({ passwordErrorMessage: 'You can tell us the password!' });
    }
    if (email === user.email && password === user.password) {
      this.props.login();
      this.setState({ loggedIn: true });
    }
    if (email !== '' && email !== user.email) {
      this.setState({ email: '', emailErrorMessage: 'Wrong Email' });
    }
    if (password !== '' && password !== user.password) {
      this.setState({ password: '', passwordErrorMessage: 'Wrong Password' });
    }
    console.log('Logging in...');
    this.props.logIn();
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      emailErrorMessage: '',
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      passwordErrorMessage: '',
    });
  }

  render() {
    const { route, loggedIn } = this.props;

    if (loggedIn) {
      return (
        <div>
          {renderRoutes(route.routes)}
        </div>
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
              errorText={this.state.emailErrorMessage}
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <br />
            <TextField
              hintText="Password"
              type="password"
              errorText={this.state.passwordErrorMessage}
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            <RaisedButton
              label="Log In"
              primary
              onClick={this.handleClick}
              disabled={this.state.isRobot}
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
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps, { logIn })(Auth);

const styles = {
  formStyle: {
    padding: '60px',
  },
};