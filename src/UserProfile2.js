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
  import React from "react";
  
  import { useNavigate } from "react-router-dom";
import Hero from "./hero";
  const UserProfile2 = () => {
    const navigate = useNavigate();
    const paperStyle = {
      padding: 20,
      height: "auto",
      width: 680,
      margin: "20px 300px",
      display: "inline-flex",
       // backgroundColor: "yellow",
  };
  const paperone = {
    padding: 10,
    height: "auto",
    width: 370,
    margin: "50px auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const papertwo = {
    padding: 10,
    height: "auto",
    width: 310,
    margin: "50px auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  //   const left = {
  //     display: "flex",
  //     // background: lightyellow,
  //     width: 1 / 2,
  //     margin: "80px auto",
  //   };
  //   const right = {
  //     display: "flex",
  //     // background: lightyellow,
  //     width: 1 / 2,
  //     margin: "80px auto",
  //   };
  return (
    <div>
      <Hero></Hero>
      <Box
        style={paperStyle}
            display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box style={paperone}>
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
                  onClick={() => navigate("/test1")}
                >
                  I DONT WANT TO CREATE ORGANIZATION
                </Button>
                </CardActions>
            </Card>
          </Grid>
        </Box>
        <Box style={papertwo}>
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
                    label="Organization Name"
                    placeholder="Enter Orgname"
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
                    label="Organization Handle"
                    placeholder="Enter OrgHandle"
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
                  <FormHelperText>
                    Please select your Organization country
                  </FormHelperText>
                </FormControl>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid item direction="column">
                  <TextField
                    type="url"
                    label="Organization Website"
                    placeholder="Enter OrgWebsite"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item direction="column">
                  <p></p>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default UserProfile2;

  