import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {

  render() {
    const { route } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          {renderRoutes(route.routes)}
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;