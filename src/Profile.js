import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Hero from "./hero";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import GroupIcon from "@mui/icons-material/Group";
import { useState, useEffect } from "react";
import { addOrUpdateDocs, getUserDetails } from "./Firebaseutils";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Profile = () => {
  const [userName, setUserName] = useState("Name");
  const [WebSite, setWebSite] = useState("WebSite");
  const [Description, setDescription] = useState("Description");
  const [Facebook, setFacebook] = useState("Facebook");
  const [Linkedin, setLinkedin] = useState("Linkedin");
  const [Github, setGithub] = useState("Github");


  const [user, loading, error] = useAuthState(auth);
  const uid = user.uid;
  useEffect(() => {
    const loadData = async () => {
      const { data: details } = await getUserDetails(uid);
      setUserName(details.userName);
      setWebSite(details.WebSite);

    };
    loadData();
  }, []);

  const updateDetails = async () => {
    const { id, data: details } = await getUserDetails(uid);
    if (details.userName !== userName) details.userName = userName;
    if (details.WebSite !== WebSite) details.WebSite = WebSite;
    if (details.Description !== Description) details.Description = Description;
    if (details.Facebook !== Facebook) details.Facebook = Facebook;
    if (details.Linkedin !== Linkedin) details.Linkedin = Linkedin;
    if (details.Github !== Github) details.Github = Github;

    addOrUpdateDocs(uid, details);
  };

  const updateName = (event) => {
    setUserName(event.target.value);
    updateDetails();
  };
  const updateWebSite = (event) => {
    setWebSite(event.target.value);
    updateDetails();
  };
  const updateDescription = (event) => {
    setDescription(event.target.value);
    updateDetails();
  };
  const updateFacebook = (event) => {
    setFacebook(event.target.value);
    updateDetails();
  };
  const updateLinkedin = (event) => {
    setLinkedin(event.target.value);
    updateDetails();
  };
  const updateGithub= (event) => {
    setGithub(event.target.value);
    updateDetails();
  };
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 900,
    margin: "20px 100px",
    display: "inline-flex",
  };
  const paperone = {
    padding: 10,
    elevation: 10,
    height: "auto",
    width: 200,
    margin: "10px auto",
    display: "inline-flex",
  };
  const papertwo = {
    padding: 6,
    height: "auto",
    width: 550,
    margin: "20px auto",
    display: "inline-flex",
  };
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
          <Grid item xs={2}>
            <Card
              variant="outlined"
              style={{
                width: 200,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <CardActions>
                <IconButton
                  type="submit"
                  variant="string"
                  color="inherit"
                  fullWidth
                  size="small"
                  padding="4"
                >
                  <AccountCircleIcon />

                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Profile
                  </Typography>
                </IconButton>
              </CardActions>
              <CardActions>
                <IconButton
                  type="submit"
                  variant="string"
                  color="inherit"
                  fullWidth
                  size="small"
                  padding="4"
                >
                  <SettingsIcon />

                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Settings
                  </Typography>
                </IconButton>
              </CardActions>
              <CardActions>
                <IconButton
                  type="submit"
                  variant="string"
                  color="inherit"
                  fullWidth
                  size="small"
                  padding="4"
                >
                  <NotificationsActiveIcon />

                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Notifications
                  </Typography>
                </IconButton>
              </CardActions>
              <CardActions>
                <IconButton
                  type="submit"
                  variant="string"
                  color="inherit"
                  fullWidth
                  size="small"
                  padding="4"
                >
                  <GroupIcon />

                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Organizations
                  </Typography>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Box>

        <Box style={papertwo}>
          <Grid>
            <Card
              variant="outlined"
              style={{
                width: 520,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Typography
                    sx={{ fontSize: 30 }}
                    color="text.primary"
                    gutterBottom
                  >
                    PROFILE
                  </Typography>
                  <Grid item direction="column">
                    <p></p>
                  </Grid>
                </Grid>
                <br></br>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid container direction="column">
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item directions="column">
                      <TextField
                        type="text"
                        label="User Name"
                        placeholder="Enter Username"
                        fullWidth
                        required
                        onChange={updateName}
                        value={userName}
                      />
                    </Grid>
                    <Grid item direction="row">
                      <p></p>
                    </Grid>
                    <Grid item directions="column">
                      <FormControl sx={{ m: 0, minWidth: 220 }}>
                        <InputLabel>Country</InputLabel>
                        <Select label="Country">
                          <MenuItem>India</MenuItem>
                          <MenuItem>US</MenuItem>
                          <MenuItem>UK</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <br></br>
                  <Grid item direction="column">
                    <p></p>
                  </Grid>
                </Grid>
                <Grid item direction="column">
                  <p></p>
                </Grid>

                <Grid container direction="column">
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item directions="column">
                      <TextField
                        type="text"
                        label="Website"
                        placeholder="Website Name"
                        fullWidth
                        required
                        onChange={updateWebSite}
                        value={WebSite}
                      />
                    </Grid>
                    <Grid item direction="row">
                      <p></p>
                    </Grid>
                    <br></br>
                    <Grid item directions="column">
                      <TextField
                        type="text"
                        label="Description"
                        placeholder="Description"
                        fullWidth
                        required
                        onChange={updateDescription}
                        value={Description}
                      />
                    </Grid>
                  </Grid>
                  <br></br>
                  <Grid item direction="column">
                    <p></p>
                  </Grid>
                </Grid>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid item direction="column">
                  <TextField
                    type="text"
                    label="Facebook"
                    placeholder="www.facebook.com/user"
                    fullWidth
                    required
                    onChange={updateFacebook}
                    value={Facebook}
                  />
                </Grid>
                <br></br>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid item direction="column">
                  <TextField
                    type="text"
                    label="Linkedin"
                    placeholder="www.linkedin.com/user"
                    fullWidth
                    required
                    onChange={updateLinkedin}
                    value={Linkedin}
                  />
                </Grid>
                <br></br>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid item direction="column">
                  <TextField
                    type="text"
                    label="Github"
                    placeholder="www.github.com/user"
                    fullWidth
                    required
                    onChange={updateGithub}
                    value={Github}
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
export default Profile;