import * as React from 'react';
import tutorial from './Tutorial';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';

export default function BasicMenu2() {
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
        <ListTwoToneIcon></ListTwoToneIcon>
        </IconButton>
      </Button>
      <Menu
        id="basic-menu2"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>navigate("/page")}>Edit Description</MenuItem>
        <MenuItem onClick={()=>navigate("/page")}>Edit Tutorials Theme</MenuItem>
        <MenuItem onClick={()=>navigate("/page")}>Move to Trash</MenuItem>
      </Menu>
    </div>
  );
}
