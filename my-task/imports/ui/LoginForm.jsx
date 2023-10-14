import { Button, Typography } from "@material-ui/core";
import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import { Form } from "react-bootstrap";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <div className="LoginformMainDiv">
      <div className="login-form">
        {/* <div className="HeadingDiv"> */}
        <div id="TodoimageDiv">
        <img id="Todoimage" src="My TO DO.png" alt="" />
      <Typography id="manage_your_task">Manage your tasks</Typography>
        </div >
      
        {/* <Typography id="manage_your_task">Manage your tasks</Typography> */}
        {/* </div> */}
         <div id="loginlableDiv">

      
        <Typography className="Loginlabel">Login</Typography>
        </div>
        {/* <img className="Loginlabel" src="Login.png" /> */}
        {/* <Typography className="Loginlabel">Login</Typography> */}
        <div id="Twoinputs">
          <div id="containeroftwoinputs">
            <Form onSubmit={submit} id="TextfielsdDiv">
              <TextField
                variant="outlined"
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  classes: {
                    root: "custom-input",
                  },
                  style: {
                    paddingLeft: "100.78px !important",
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#000000",
                    maxWidth: "604px",
                    maxHeight: "74px",
                    width:"100%",
                    height:"100%",
                    background: "#FFFFFF",
                    // border: "1px solid #646363",
                    borderRadius: "15px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#717171",
               
                  },
                }}
              />
              <TextField
                variant="outlined"
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  classes: {
                    root: "custom-input",
                  },
                  style: {
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#000000",
                    maxWidth: "604px",
                    maxHeight: "74px",
                    width:"100%",
                    height:"100%",
                    background: "#FFFFFF",
                    // border: "1px solid #646363",
                    borderRadius: "15px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#717171",
                  },
                }}
              />{" "}
            
              <Button id="Loginbttn" type="submit">
                LogIn
              </Button>
        
              
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
