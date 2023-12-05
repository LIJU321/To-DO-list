import React, { Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/TasksCollection";
import { Task } from "./Task";
import TaskForm from "./TaskForm";
import { LoginForm } from "./LoginForm";
import { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Typography } from "@mui/material";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export const App = () => {
  const [popupstate, setpopstate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [Height, setHeight] = useState("");

  const [v,setv] = useState("")

  // const navigate = useNavigate();
  const user = useTracker(() => Meteor.user());

  const tasks = useTracker(() => TasksCollection.find({}).fetch());
  // console.log("Tasks",tasks)



// Method call t retrieve data from db without usetracker//

  // Meteor.call("fetch",(err, result) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log("SSSS",result);

  //   }
  // })

  //////////////// end /////////////////



  //const history = useHistory(()=> history.push("/login")); // add this line to get the history object

  // console.log(tasks)
  //  MAIN LOGOUT FUNCTION
  const Logout = () => {
    // navigate("/TaskForm");
    // Meteor.logout();
      <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginForm/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    handleclose();
  };

  const handlelogout = () => {
    console.log("HIII");
    setpopstate(true);
  };
  const handleclose = () => {
    setpopstate(false);
  };

  // }
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // console.log(user);

  // experimental javascript codes//
  // Height + 28 +"px"
  // useEffect(() => {
  //   const mydiv = document.getElementById("DIvforTAsks");
  //   if (mydiv) {
  //     // var DIvtasks = document.getElementById("DIvforTAsks")
  //     setHeight(mydiv.offsetHeight);
  //      mydiv.style.height = (100 * 2) + "px"
  //     // var Divtaskheight =  DIvtasks.offsetHeight;
  //     console.log("height", Height);
    
  //   }
  // }, []);
  /*useEffect(() => {
    const mydiv = document.getElementById("DIvforTAsks");
    if (mydiv) {
      const childElements = mydiv.children;
      // Access the height of the parent element
      const parentHeight = mydiv.offsetHeight;
      console.log("Parent height:", parentHeight);
      
      // Loop through the child elements and log their heights
      for (let i = 0; i < childElements.length; i++) {
        const childElement = childElements[i];
        const childHeight = childElement.offsetHeight;
        console.log("Child height:", childHeight);
      }
      
      // Set the height of the parent element
      mydiv.style.height = (parentHeight * 2) + "px";
    }
  });*/
  
  //       END  BLOCK  //


  useEffect(() => {
    const mydiv = document.getElementById("DIvforTAsks");
    if (mydiv) {
      // const childElements = mydiv.children;
      // Access the height of the parent element
      // const parentHeight = mydiv.offsetHeight;
      // console.log("Parent height:", parentHeight);
      // console.log(mydiv)
      // Loop through the child elements and log their heights
  
      for (let i = 0; i < mydiv.length; i++) {
        // const childElement = childElements[i];
        // const childHeight = childElement.offsetHeight;
        // console.log("Child height:", childHeight);
        const Parentelement = mydiv[i];
        parentHeight = Parentelement.offsetHeight;
        console.log(parentHeight)
            console.log(mydiv.length)
      }
      
      // Set the height of the parent element
      // mydiv.style.height = (parentHeight * 2) + "px";
    }
  });
  



  return (
    <div id="appjsdiv">
      {user ? (
        <Fragment>
          <div className="containertask">
            <div id="todocontain">
              <img id="Title2" src="My TO DO.png" alt="" />
            </div>
            <div id="logoutdiv">
              <img
                id="IconProfile"
                onClick={handlelogout}
                src="user 1.png"
              ></img>
            </div>
          </div>
          <DialogContent id="Dialogger">
            <Dialog
              open={popupstate}
              onClose={handleclose}
              PaperProps={{ id: "hiddendivcontainer" }}
            >
              <DialogTitle id="ProfileDialog">
                <Typography className="Typographyusername">
                  {user.username}
                </Typography>{" "}
                <hr id="Line"></hr>
                <DialogActions id="ProfileDialogActions">
                  <img id="Logoutpng" onClick={Logout} src="Logout.png" />
                </DialogActions>
              </DialogTitle>
            </Dialog>
          </DialogContent>
          <div className="Tasks">
            {tasks.map((task, Index) => (
              <Task key={task._id} task={task} index={Index} />
            ))}
          
          </div>
          <TaskForm />
        </Fragment>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};
