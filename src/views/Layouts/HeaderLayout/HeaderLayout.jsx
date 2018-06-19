import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircle from '@material-ui/icons/AddCircle';

import { endPoints } from '../../../config/routes';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { add: false };
  }

  handleToggleAdd = () => this.setState({ add: !this.state.add });

  render() {
    const { route, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <IconButton 
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            iPhone Seller
          </Typography>
          <IconButton 
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => this.handleToggleAdd()}
          >
            <AddCircle />
          </IconButton>
        </Toolbar>
        </AppBar>
        {this.state.add && <Redirect to={endPoints.phoneAdd} />}
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default withStyles(styles)(HeaderLayout);