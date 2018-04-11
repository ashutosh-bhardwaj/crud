import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Notice from '../Notice';

function App(props) {
  const { route } = props;
  return (
    <MuiThemeProvider>
      <div>
        {renderRoutes(route.routes)}
        <Notice />
      </div>
    </MuiThemeProvider>

  );
}

App.propTypes = {
  route: PropTypes.object.isRequired,
};

export default App;
