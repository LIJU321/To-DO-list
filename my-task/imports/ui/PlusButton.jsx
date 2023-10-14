import React, { Fragment } from "react";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Form } from "react-bootstrap";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function PlusButton(props) {
  const [Taskpop, setTaskpop] = useState(false);
  const [Tittledata, setTittledata] = useState(props.tittle || "");
  const [Textdata, setTextdata] = useState(props.taskdata || "");

  const ID = props.ID;

  const submit = (event) => {
    // console.log("HELLO");
    event.preventDefault();
    if (!Textdata || !Tittledata) {
      return;
    }

    if (props.task == false) {
      Meteor.call("Insert", Textdata, Tittledata, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
        }
      });

      setTextdata("");
      setTittledata("");
      closeTask();
    } else {
      console.log(ID);
      Meteor.call("Edit", Textdata, Tittledata, ID, (err, result) => {
        if (err) {
          console.error(err);
        }
        {
          console.log(result);
        }
      });
      closeTask();
    }
  };

  function Task1() {
    setTaskpop(true);
  }
  function closeTask() {
    setTaskpop(false);
    // setTextdata(""); clearing textfiled if closing without submitting
  }
  // Find the <style> element with the data-meta attribute set to "MuiDialogTitle"

  return (
    <Fragment>
      <div id={props.id}>
        <img id={props.id} onClick={Task1} src={props.src} alt="Add" />
      </div>

      {/*  out of order work on progress */}

      <Dialog
        open={Taskpop}
        onClose={closeTask}
        PaperProps={{
          classes: {
            root: "custom-dialog-paper-root",
          },
          style: {
            maxWidth: "944px",
            width: "100%",
            maxHeight: "596px",
            height: "100%",
            background: "#ffffff",
            borderRadius: "unset !important",
            borderRadius: "20px",
          },
        }}
      >
        <DialogTitle style={{ padding: "0" }}>
          <div id="formscontainer_add_task">
            <Typography className="TitileofDialog_add_task">
              New Note
            </Typography>
          </div>
        </DialogTitle>

        <DialogContent id="dialogcontentpadding_addtask">
          <Form onSubmit={submit} id="textfield_add_task">
            {" "}
            {/* Tittle data geeting */}
            <TextField
              className="MuiTextField-root"
              multiline
              rows={1}
              variant="outlined"
              type="text"
              placeholder="Title"
              value={Tittledata}
              onChange={(event) => setTittledata(event.target.value)}
              InputProps={{
                classes: {
                  root: "custom-taskadding",
                },
                style: {
                  maxWidth: "780px",
                  width: "100%",
                  height: "84px",
                  boxSizing: "border-box",
                  background: "#ffffff !important",
                  borderRadius: "15px",
                  whiteSpace: "pre-line",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "30px",
                },
              }}
            />
          </Form>

          <Form id="formoftxt_add_task" onSubmit={submit}>
            {" "}
            {/* Text data geeting */}
            <TextField
              className="MuiOutlinedInput-input1"
              multiline
              rows={5}
              variant="outlined"
              type="text"
              placeholder="Details"
              value={Textdata}
              onChange={(event) => setTextdata(event.target.value)}
              InputProps={{
                classes: {
                  root: "custom-taskadding2",
                },
                style: {
                  maxWidth: "780px",
                  width: "100%",
                  height: "209px",
                  boxSizing: "border-box",
                  background: "#ffffff !important",
                  whiteSpace: "pre-line",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "30px",
                },
              }}
            ></TextField>
          </Form>
          <DialogActions id="dialogactionspaddingremover">
            <div id="Dialog-actions_add_task">
              <Button
                onClick={closeTask}
                color="primary"
                id="custom-button1"
                className="labelofactionbuttons"
              >
                Cancel
              </Button>
              <Button
                onClick={submit}
                color="primary"
                id="custom-button2"
                className="labelofactionbuttons"
              >
                Save
              </Button>
            </div>
          </DialogActions>
          {/* </DialogContentText> */}
        </DialogContent>
        {/* </div> */}
      </Dialog>
    </Fragment>
  );
}
