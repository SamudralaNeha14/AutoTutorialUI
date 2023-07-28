import React from 'react'
import Hero from './hero'
import BasicMenu2 from "./Dropdown2";
import {
   TextField,
   textarea,
   IconButton,
   TextareaAutosize,
   Button,
   CardActions,
   Typography,
   ThemeProvider,
   Grid,
   createTheme,
   Box,
   ButtonGroup,
   } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Description } from '@mui/icons-material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
const theme = createTheme({
  typography: {
    poster: {
      color: 'red',
    },
    // Disable h3 variant
    h3: undefined,
  },
});

const tutorial = () => {

  
  return (
    <div>
      <Hero></Hero>
<ButtonGroup>
<Button startIcon={<AddIcon/>}
variant ="contained"
sx={{width: 150,height:30,padding:0, margin:2}}
color='secondary'>
ADD TUTORIAL
</Button>
<Button startIcon={<InsertDriveFileIcon/>}
variant ="contained"
sx={{width: 150,height:30,padding:0, margin:2}}
color='secondary'>
ADD IMAGES
</Button>

<Button startIcon={<VisibilityIcon/>}
variant ="contained"
sx={{width: 150,height:30,padding:0, margin:2}}
color='secondary'>
HIDE IMAGES
</Button>
<Button startIcon={<DeleteIcon/>}
variant ="contained"
sx={{width: 150,height:30,padding:0, margin:2}}
color='secondary'>
REMOVE STEP</Button>

<TextField 
      label="SEARCH"
      InputProps={{min: 100, style: { variant:'outlined',textAlign: 'right',margin:3 },
        endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
<Button startIcon={<FileCopyIcon/>}
variant ="contained"
sx={{width: 150,height:30,padding:0, margin:2}}
color='secondary'>
PREVIEW
</Button>
<Button startIcon={<FileCopyIcon/>}
variant ="contained"
sx={{width: 150,height:30,padding:0, margin:2}}
color='secondary'>
PUBLISH</Button>
<Button startIcon={<ListTwoToneIcon/>}
sx={{color:'violet',width: 55,height:30}}></Button></ButtonGroup>

<ThemeProvider theme={theme}>
  <h1><Typography variant="title">TITLE</Typography></h1>
  <Typography><TextField
  style={{padding:5,margin:2,color:'blueviolet',backgroundcolor:'primary.main'}}/></Typography>
  <h3><Typography variant="Subtitle1">SUBTITLE</Typography></h3>
  <Typography><TextField
  style={{padding:5,margin:2,color:'blueviolet',backgroundcolor:'primary.main'}}/></Typography>
  
</ThemeProvider>

{/* <textarea
sx= {{
  backgroundcolor:'primary.main',
  color:'white',
  Align:'center',
  height:'10000px',
  width:'500px',
  rows:'50',
  cols:'60',
  padding:'16px',
  '&:hover':{backgroundcolor:'primary.light',},

}}/> */}
<input type="file"/>

<h1><TextareaAutosize
  aria-label="minimum height"
  minRows={50}
  Align ="center"
  placeholder="TYPE HERE"
  style={{ Align:'center',fontStyle:'Roboto',color:'violet',width: 800,height:500 }}

/></h1>

    </div>
    
  )
}
export default tutorial;
