import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";
import { Accounts } from "meteor/accounts-base";

// import {Username} from "../imports/api/Username";

const SEED_USERNAME = "meteor";
const SEED_PASSWORD = "password";

Meteor.methods({
  Insert: function (data, Tittledata) {
    // const s = TasksCollection.insert({Text:data,createdAt:new Date()})
    const s = TasksCollection.insert({
      Tittle: Tittledata,
      Text: data,
      createdAt: new Date(),
      isChecked: false,
    });
    return s;
  },

  deletetask: function (id) {
    {
      TasksCollection.remove(id);
    }
  },

  Edit: function (edited_task, Edited_Tittle, taskid) {
    const task = TasksCollection.find({ _id: taskid });
    //  TasksCollection.update({_id:"Auk4PAXy8JDZ4SoFk"},{$set:{"Text":"remove"}})
    TasksCollection.update(
      { _id: taskid },
      { $set: { Text: edited_task, Tittle: Edited_Tittle } }
    );
    return;
  },

  // Edit:function (edited_task, taskid){
  //   const task = TasksCollection.findOne({_id:taskid});
  //   TasksCollection.update({_id: taskid}, {$set: {Text: edited_task}});
  //   return
  // },

  updateTask: function (id, status) {
    const stats = status;
    const task = TasksCollection.findOne({ _id: id });
    const currentChecked = task.isChecked || false; // use current value or false if not defined    || or condtion
    TasksCollection.update(
      { _id: id },
      { $set: { isChecked: !currentChecked } }
    );
    return;
  },

  
  // checkbox marking ....
  //  updateTask: function(id, status){
  //   const isChecked = status === "checked" ? true : false;
  //     const task = TasksCollection.findOne({_id: id});
  //     const currentChecked = task.isChecked || false; // use current value or false if not defined    || or condtion
  //     TasksCollection.update({_id: id}, {$set: {isChecked: !currentChecked}});
  //     s = TasksCollection.find({isChecked:true})
  //   return s;
  // }



////////////////////////////
// Method call t retrieve data from db without usetracker

  // fetch: function () { 
  //  const T = TasksCollection.find({}).fetch()
  //  return T
  // }
  
/////////////////////////


});

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    // Checks if A username called SEED_USERNAME is already in database meteor.users
    Accounts.createUser({
      // if not createUser
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
