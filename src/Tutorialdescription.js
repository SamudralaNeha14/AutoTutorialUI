import { Box, Button, TextField } from "@mui/material";
// import Upload from "./upload";
// import AccountMenu from './AccountMenu';
import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
// import JoditEditor from "jodit-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {addOrUpdateDocs,getUserDetails} from "./Firebaseutils";
// import MyCkEditor from "./Editor";
import Hero from "./hero";
const Tutorialdescription = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [tags, Tags] = useState("Enter Tags");
  const [url, Url] = useState("Enter Url");
  const tutorialCollectionRef = collection(db, "tutorials");
  const editor = useRef(null);
  const creattutorial = async () => {
    await addDoc(tutorialCollectionRef, {
      title,
      content,
      tags,
      url,
      author: { name: auth.currentUser.displayName, uid: auth.currentUser.uid },
    });

    window.alert("added to db");
  };
  const paperone = {
    padding: 10,
    height: "auto",
    width: 1000,
    margin: "50px auto",
  };
  return (
    <div>
      <Hero></Hero>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>CREATE A POST</h2>
      </div>
      <div>
        <Box style={paperone}>
          <h4>TITLE</h4>
          <TextField
            onChange={(event) => settitle(event.target.value)}
            placeholder="Enter to Title"
            fullWidth
            id="fullWidth"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Upload></Upload> */}
          </div>
          {/* <MyCkEditor /> */}
          <h4 style={{ textalign: "left" }}>TAGS</h4>
          <TextField
            type="text"
            placeholder="Enter to add tags"
            fullWidth
            onChange={(event) => tags(event.target.value)}
          ></TextField>

          <h4 style={{ textalign: "left" }}>DESCRIPTION</h4>
          <TextField
            onChange={(event) => settitle(event.target.value)}
            placeholder="ENTER THE DESCRIPTION"
            fullWidth
            id="fullWidth"
          />
          <h4 style={{ textalign: "left" }}>URL</h4>
          <TextField
            type="text"
            placeholder="Enter to URL"
            fullWidth
            onChange={(event) => Url(event.target.value)}
          ></TextField>
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button 
          style={{width: "100px",height: "40px"}}
          // size="small" 
          variant="contained" onClick={creattutorial}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
  
};

export default Tutorialdescription;