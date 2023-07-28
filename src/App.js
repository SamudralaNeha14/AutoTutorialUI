import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import fire from "./firebase";
import Signin from "./Signin";
import Hero from "./hero";
import Tutorial from "./Tutorial"
import Createpost from "./Post";
import Tutorialdescription from "./Tutorialdescription";
//import  UserProfile from "./UserProfile";
import "./App.css";

//import Profile from "./UserProfile";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, BrowserRouter } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserProfile2 from "./UserProfile2";
import Profile from "./Profile";
import { Description } from "@mui/icons-material";
import Home from "./Home";

//import UserProfile from "./UserProfile";
/*import { render } from "@testing-library/react";
import { Home } from "@mui/icons-material";
import UserProfile from "./UserProfile";*/

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasseordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const nav =useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasseordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError("There is no user with this mail id");
            break;
          case "auth/wrong-password":
            setPasseordError("Wrong Password - Try Again");
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasseordError("Have a password of at least 6 characters");
            break;
        }
      });
      nav("/home");
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  
   return(
   //<BrowserRouter>
   <Routes>
     <Route path='/' element={<Signin
       email={email}
       setEmail={setEmail}
       password={password}
       setPassword={setPassword}
       handleLogin={handleLogin}
       handleSignup={handleSignup}
       hasAccount={hasAccount}
       setHasAccount={setHasAccount}
       emailError={emailError}
       passwordError={passwordError}
     /> } />
     <Route path ='/home' element ={<Hero/>}/>
     <Route path ='/test1' element ={<UserProfile/>}/>
     <Route path ='/test2' element ={<UserProfile2/>}/>
     <Route path ='/debug' element ={<Profile/>}/>
     <Route path ='/page2' element ={<Tutorial/>}/>
     <Route path ='/page' element ={<Createpost/>}/>
     <Route path="/test3" element={<Home/>}/>
     <Route path="/page1" element={<Tutorialdescription/>}/>
     
      </Routes>
//</BrowserRouter>

    //-----------------------------------------------------
    // <div className="App">
    //   {user ? (        
    //     <Hero handleLogout={handleLogout} />
    //      <Orgprofile/>
    //   ) : (
    //     <Signin
    //       email={email}
    //       setEmail={setEmail}
    //       password={password}
    //       setPassword={setPassword}
    //       handleLogin={handleLogin}
    //       handleSignup={handleSignup}
    //       hasAccount={hasAccount}
    //       setHasAccount={setHasAccount}
    //       emailError={emailError}
    //       passwordError={passwordError}
    //     />
    //     )}
    //   </div>
  );
};

export default App;