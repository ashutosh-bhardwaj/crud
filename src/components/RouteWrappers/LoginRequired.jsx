import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { endPoints } from '../../config/routes';

function LoginRequired({ route, loggedIn }) {
  return (
    <div>
      {loggedIn && renderRoutes(route.routes)}
      {!loggedIn && <Redirect to={endPoints.signin} />}
    </div>
  );
}

LoginRequired.propTypes = {
  route: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps, null)(LoginRequired);
