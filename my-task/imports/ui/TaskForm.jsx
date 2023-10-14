import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/TasksCollection";
import AddTask from "./AddTask";
import PlusButton from "./PlusButton";

function TaskForm() {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());
  if (tasks.length === 0) {
    return (
      <div id="centering">
        <AddTask />
      </div>
    );
  }
  return (
    <PlusButton
      src={"Ellipse 13.png"}
      id={"VisibilityBttn"}
      text={"New Note"}
      task={false}
    />
  );
}
export default TaskForm;
