import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {

  state = {
    isDrawerOpen: false
  };

  toggleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen  });
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu"
              onClick={ this.toggleDrawer } >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" >
              Em's Tools
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={ this.state.isDrawerOpen }
          onOpen={ this.toggleDrawer }
          onClose={ this.toggleDrawer } >
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Home" href="/" />
            </ListItem>
            <ListItem button component="a" href="/string-generator">
              <ListItemText primary="String Generator" />
            </ListItem>
            <ListItem button component="a" href="/bcrypt">
              <ListItemText primary="Bcrypt" />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default NavBar;
