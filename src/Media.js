import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from "@mui/material/Grid";
import { signInWithGoogle,signInWithFacebook,signInWithGitHub } from "./firebase";
const Media = () => {
  return (
    <div>
      <Grid container spacing={4} direction="row" justifyContent={"center"}>
        <Grid item sm={4}>
          <GoogleIcon style={{ color: "red" }} 
          onClick={signInWithGoogle} />
         </Grid>
        <Grid item sm={4}>
          <FacebookIcon
            style={{ color: "Blue" }}
            onClick={signInWithFacebook}
          /> 
        </Grid>
         <Grid item sm={4}>
          <GitHubIcon
            style={{ color: "black" }}
            onClick={signInWithGitHub}
          />
        </Grid> 
      </Grid>
    </div>
  );
};

export default Media;