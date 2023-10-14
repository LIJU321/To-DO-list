import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";

export default function DeletePromt(Props) {
  const { open1, close, ondelete } = Props;
  return (
    <Dialog open={open1} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete the task ?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button onClick={ondelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
