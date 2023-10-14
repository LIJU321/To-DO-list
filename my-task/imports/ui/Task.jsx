//color dynaamic all set and border//
import React from "react";
import { Button, Checkbox, Typography } from "@material-ui/core";
import { useState } from "react";
import "reactjs-popup/dist/index.css";
import { Fragment } from "react";
import { TasksCollection } from "../api/TasksCollection.js";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import PlusButton from "./PlusButton.jsx";
import DeletePromt from "./DeletePromt.jsx";
import { useEffect } from "react";
//try :

// import Popcomponent from "./Popcomponent";
//Except exception  as e:
// print(e)

// named export so when importing should use named import {Task}
export function Task({ task, index }) {
  const { isChecked, Text, _id, Tittle } = task;
  // destructured  ...

  const submit = (event) => {
    event.preventDefault();
    if (!Textdata && !Tittledata) {
      return;
    }

    // console.log("text",Text,taskid)
    Meteor.call("Edit", Textdata, Tittledata, taskid, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    });
    // setTextdata("");
    // setTittledata("");
    closeTask();
  };

  function Taskedit() {
    console.log("HELLO");
    // setTaskeditpop(true);
    <PlusButton />;
  }
  function closeTask() {
    setTaskeditpop(false);
    // setTextdata(""); clearing textfiled if closing without submitting
  }
  const [popmsg, setpopmsg] = useState(false);
  const [Text1, setText] = useState("");
  const [showText, setshowText] = useState("");

  const handleDelete = (id) => {
    Meteor.call("deletetask", id, (err1, result1) => {
      if (err1) {
        console.error(err1);
      } else {
        console.log(result1);
      }
    });
  }; // handledelete closing

  // alert("You are about to delete a task")
  // console.log("top",Checked)
  // if (Checked) {
  //   //console.log("status=",Checked,"id",task._id); // currently working on marking the state on database wether checkbox marked or not ?
  // } //if statement closing

  const marked = useTracker(() =>
    TasksCollection.find({ isChecked: true }).fetch()
  );

  const onCheckboxClick = () => {
    const newChecked = !isChecked;
    const taskId = _id;

    Meteor.call("updateTask", taskId, { checked: newChecked }, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    });
  };
  const handlepop = () => {
    setpopmsg(true);
    console.log("clicked");
  };
  const handleClosePopup = () => {
    setpopmsg(false);
  };

  const gettext = (event) => {
    setText(event.target.value);
    setshowText(event.target.value);
  };

  const taskid = task._id;

  // const c = "#" + Math.floor(Math.random() * 16777215).toString(16)
  // const c = "#" + Math.floor(Math.random() *1351515157 , 14024695 ).toString(16)

  const divbackground = ["#DDFFDC", "#FFF2D0", "#FFE5DE", "#CFDAFF", "#D4FFF7"];
  const divborder = ["#03A500", "#FFCB46", "#FF6338", "#496EF3", "#18BD9F"];

  // const handle_edit = (event)=>{
  //    event.preventDefault()
  //   const Task_to_edit = Text1

  // div color dynamic
  const colorIndex = index % divbackground.length;
  const colorClass = `color-${colorIndex}`;
  const bgColor = divbackground[colorIndex];
  const BorderCol = divborder[colorIndex];
  // console.log("colorClass", colorClass);

  // to get the count of  DIvforTAsks div element
  // useEffect(() => {
  const divForTasks = document.querySelectorAll("#DIvforTAsks");
  const count = divForTasks.length;
  const heightIndex = index % count;
  // console.log("DIvforTAsks:", count);

  // var i = 0;
  // while (i < count) {
  //   i++;
  // const height1 = Math.random() * count;
  // const height = Math.floor(height1);
  const HeightClass = `Height-${heightIndex}`;
  console.log("height", HeightClass);

  // }
  // }, []);

  // experimental javascript codes//

  return (
    <Fragment>
      {/* <div id="maindiv"> */}

      {/* <div id="Text"> */}
      {/* <Checkbox
              checked={isChecked}
              onClick={() => {
               onCheckboxClick(task);
              }}
              readOnly
            /> */}
      <div
        id="DIvforTAsks"
        // className={colorClass }
        className={`${colorClass} ${HeightClass}`}
        style={{ backgroundColor: bgColor, border: `1px solid ${BorderCol}` }}
      >
        <div className="TittlePlacement">
          <Typography id="Tittle-root" variant="h6" color="primary">
            {Tittle}
          </Typography>
        </div>
        <div id="textarea">
          <Typography id="text-root" variant="h6" color="primary">
            {Text}
          </Typography>
        </div>
        <div id="delicondivcontainer">
          {/* <div id="delicon"> */}
          {/* <img id="editpng" src={{props}} onClick={() => Taskedit()} /> */}
          <PlusButton
            src={"image 60.png"}
            id={"editpng"}
            text={"Edit Note"}
            ID={taskid}
            tittle={Tittle}
            taskdata={Text}
            Task={true}
          />
          {/* <img
              id="delpng"
              src="image 61.png"
              onClick={() => handleDelete(_id)}
            /> */}
          <img
            id="delpng"
            src="image 61.png"
            // onClick={() => (<DeletePromt open={handlepop} close={handleClosePopup} ID ={taskid}/>)}
            onClick={() => handlepop()}
          />
          <DeletePromt
            open1={popmsg}
            close={handleClosePopup}
            ondelete={() => handleDelete(_id)}
          />
          {/* </div> */}
        </div>
      </div>

      {/* <Edit open={true}/> */}
      {/* <div id="taskdeletediv"/> */}
      {/* <Button id="button" size="small"  variant="contained" color="secondary" endIcon={<DeleteIcon/>} onClick={handlepop}>Delete</Button> */}

      {/* </div> */}
      {/* <div id="deletebtndiv">
          <Button 
            size="small"
            disabled={!isChecked}
            id="delbttn"
            variant="contained"
            color="secondary"
            onClick={handlepop}
          > <img id="deleteicon" src="delete.png"></img>
          </Button> */}
      {/*..............edit...........*/}
      {/* <Button onClick={()=>edit()}  id="editbttn" variant="contained" size="small"><img id="editicon" src="edit.png" alt="" /></Button> */}
      {/* <Button onClick={() => setisEditable(true)} color='primary' id="edit" variant="contained" size="small" startIcon={<EditIcon/>}>EDIT</Button> */}
      {/* </div> */}

      {/* <div> {isEditable ? <h1>hello</h1> : <h1>BYE</h1>}</div> */}

      {/* <div id="Ediablediv">{isEditable && <h1>hello</h1>}</div> */}

      {/* <Popup
          open={isEditable}
          position={"bottom center"}
          onClose={()=>{close_edit()}}
        >  
          <form onSubmit={handle_edit}>
            <div><TextField value={showText} onChange={(event)=>gettext(event)} placeholder="edit task here"></TextField></div>
          </form>
        </Popup> */}

      {/*delete prompt}
      {/* <Popup
        open={popmsg}
        position={"bottom center"}
        onClose={handleClosePopup}
      >
        <div id="containerpopup">
          <div id="popuptext">Do You Want To Delete This Task .. ? </div>

          <div id="buttonsdiv">
            <Button
              size="small"
              variant="contained"
              id="delbuttn1"
              onClick={() => handleDelete(_id)}
            >
              Yes
            </Button>
            <Button
              size="small"
              variant="contained"
              id="delbuttn2"
              onClick={() => setpopmsg(false)}
            >
              No
            </Button>
          </div>
        </div>
      </Popup> */}
    </Fragment>
  );
}
