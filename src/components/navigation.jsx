import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navigation extends Component {

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
            <Link to='/' onClick={ this.toggleDrawer } >
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to='/string-generator' onClick={ this.toggleDrawer } >
              <ListItem button>
                <ListItemText primary="String Generator" />
              </ListItem>
            </Link>
            <Link to='/bcrypt' onClick={ this.toggleDrawer } >
              <ListItem button>
                <ListItemText primary="Bcrypt" />
              </ListItem>
            </Link>
          </List>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default Navigation;
