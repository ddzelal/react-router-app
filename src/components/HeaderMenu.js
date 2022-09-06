import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ThemeContext } from "./useContex/ThemeContext";

export default function HeaderMenu() {

  const { changeTheme } = React.useContext(ThemeContext)

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">
            <Link to="/">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={"gitapp"} >
              GitApp
            </Link>
          </Button>
          
          <Button color="inherit">
          <a target="_blank" href="https://www.github.com">GITHUB</a>
          </Button>
          <Button
          onClick={()=> changeTheme('black')}
           color="inherit">
            <h5 color="black">Dark</h5>

          </Button> 
          <Button 
          onClick={()=> changeTheme('white')}
          color="inherit">
            <h5 color="black">White</h5>

          </Button> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
