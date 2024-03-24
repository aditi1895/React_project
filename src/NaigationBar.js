import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My AppBar
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          {/* <Button component={Link} to="/page1" color="inherit"></Button>
          <Button component={Link} to="/page2" color="inherit">Page 2</Button> */}
          {/* <Button component={Link} to="/page3" color="inherit">Compare Supplier</Button> */}
          <Button component={Link} to="/livecompare" color="inherit">Live Supplier</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
