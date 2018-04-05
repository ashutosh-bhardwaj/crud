import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { endPoints } from '../../config/routes';

class LoginRequired extends Component {

  render() {
    const { route, loggedIn } = this.props;
    return (
      <div>
        {loggedIn && renderRoutes(route.routes)}
        {!loggedIn && <Redirect to={endPoints.signin} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps, null)(LoginRequired);