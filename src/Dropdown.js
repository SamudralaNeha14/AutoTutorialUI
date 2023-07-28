import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, IconButton } from '@mui/material';
import {  useNavigate } from 'react-router-dom';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate= useNavigate()

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconButton>
          <Avatar></Avatar>
        </IconButton>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>navigate("/page1")}>My Tutorial</MenuItem>
        <MenuItem onClick={()=>navigate("/debug")}>Profile</MenuItem>
        <MenuItem onClick={()=>navigate("/test")}>My account</MenuItem>
        <MenuItem onClick={()=>navigate("/")}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
