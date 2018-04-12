import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Notice from '../Notice';
import { windowResize, setWindowLocation } from '../../redux/actions';

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
      <MuiThemeProvider>
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
};

export default connect(null, { windowResize, setWindowLocation })(App);
