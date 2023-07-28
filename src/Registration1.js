/*import { Divider } from "@mui/material";
import React, { Component } from "react";
import Media from "./Media";

const Signin = (props) => {
  const {
    email,
    setEmail,
    setPassword,
    password,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}> Sign In</button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}> Sign Up</button>
              <p>
                {" "}
                Have an account ?
                <span
                  onClick={() => {
                    // console.log("clicked");
                    setHasAccount(!hasAccount);
                  }}
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
        <h1><Divider> OR </Divider></h1>
        <Media/>
      </div>
    </section>
    // <h1>hello</h1>
  );
};

export default Signin;*/