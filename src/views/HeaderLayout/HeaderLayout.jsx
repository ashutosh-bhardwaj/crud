import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import AppBar from "material-ui/AppBar";
import AddCircle from "material-ui/svg-icons/content/add-circle";

import { endPoints } from '../../config/routes';

class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { add: false };
  }

  handleToggleAdd = () => this.setState({ add: !this.state.add });

  render() {
    const { route } = this.props;
    return (
      <div>
        <AppBar
          title="iPhone Seller"
          showMenuIconButton={false}
          iconElementRight={<AddCircle style={{ color: "#fff" }} />}
          iconStyleRight={{ padding: "10px" }}
          onRightIconButtonClick={this.handleToggleAdd}
        />
        {this.state.add && <Redirect to={endPoints.add} />}
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default HeaderLayout;