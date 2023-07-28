import React, { useState } from "react";
import BasicMenu from "./Dropdown";
import GroupsIcon from '@mui/icons-material/Groups';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
//import SimplePaper from './Components/Orgprofile'
export const Hero = (props) => {
  const { handleLogout } = props;
  const navigate=useNavigate();
  return (
    <AppBar position="Fixed" style={{ background: "blue" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          style={{ width: "100px" }}
        >
          <OndemandVideoIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <h3>AUTO TUTORIALS</h3>
        </Typography>

        <Stack direction="row " spacing={3}>
        <MenuItem onClick={()=>navigate("/test1")}>ORGANIZATION</MenuItem>
        <MenuItem onClick={()=>navigate("/.")}>SAVED</MenuItem>
        <MenuItem onClick={()=>navigate("/test3")}>JOURNEY</MenuItem>
          <BasicMenu/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Hero;