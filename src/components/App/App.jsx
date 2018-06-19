import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Notice from '../Notice';
import { windowResize, setWindowLocation } from '../../redux/actions';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

class App extends Component {
  componentDidMount() {
    // Attach windowResize action on window resize
    window.onresize = () => this.props.windowResize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentDidUpdate() {
    this.props.setWindowLocation(window.location.pathname);
  }

  render() {
    const { route } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          {renderRoutes(route.routes)}
          <Notice />
        </div>
      </MuiThemeProvider>

    );
  }
}

App.propTypes = {
  route: PropTypes.object.isRequired,
  windowResize: PropTypes.func.isRequired,
  setWindowLocation: PropTypes.func.isRequired,
};

export default connect(null, { windowResize, setWindowLocation })(App);
