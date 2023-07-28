import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import Hero from "./hero";
  
  const UserProfile = () => {
    const navigate = useNavigate();
    const paperStyle = {
        padding: 20,
    height: "auto",
    width: 340,
    margin: "80px auto",

    // backgroundColor: "yellow",
  };
  return (
    <div>
      <Hero></Hero>
      {/* <Paper elevation={10} style={paperStyle}> */}
      <Box style={paperStyle}>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Grid item direction="column">
                <TextField
                  type="text"
                  label="User Name"
                  placeholder="Enter Username"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item direction="column">
                <p></p>
              </Grid>
              <Grid item direction="column">
                <TextField
                  type="text"
                  label="User Handle"
                  placeholder="Enter UserHandle"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item direction="column">
                <p></p>
              </Grid>
              <FormControl sx={{ m: 0, minWidth: 268 }}>
                <InputLabel>Country</InputLabel>
                <Select label="Country">
                  <MenuItem>India</MenuItem>
                  <MenuItem>US</MenuItem>
                  <MenuItem>UK</MenuItem>
                </Select>
                <FormHelperText>Please select your country</FormHelperText>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="small"
              >
                SUBMIT 
                </Button>
            </CardActions>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                fullWidth
                onClick={() => navigate("/test2")}
              >
                I WANT TO CREATE A ORGANIZATION
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Box>
      {/* </Paper> */}
    </div>
  );
};

export default UserProfile; 