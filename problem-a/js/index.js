'use strict';

/* your code goes here! */

/* 1. and 2. */
class Task {

  constructor(newDescription, newComplete) {
    this.description = newDescription;
    this.complete = newComplete;
  }

  render() {
    let newTask = document.createElement('li');

    newTask.textContent = this.description;

    if (this.complete) {

      newTask.classList.add('font-strike');

    }

    newTask.addEventListener('click', () => {
      this.toggleFinished();
      newTask.classList.toggle('font-strike');
    });

    return newTask;
  }

  toggleFinished() {
    this.complete = !this.complete;
  }

}

/* 3. */
class TaskList {

  //takes an array of task objects
  constructor(newTasks) {
    this.tasks = newTasks;
  }

  addTask(description) {
    let newTask = new Task(description, false);
    this.tasks.push(newTask);
  }

  render() {

  let newOl = document.createElement('ol');
  
  this.tasks.forEach((task) => {
    newOl.appendChild(task.render());
  });

  return newOl;
  }

}

/* 4. */

class NewTaskForm {

  constructor(newSubmitCallback) {
    this.submitCallback = newSubmitCallback;
  }

  render() {

    let newForm = document.createElement('form');

    let newInput = document.createElement('input');
    
    newInput.classList.add('form-control', 'mb-3');
    newInput.setAttribute('placeholder', "What else do you have to do?");
    
    let newButton = document.createElement('button');
    newButton.classList.add('btn', 'btn-primary');
    newButton.textContent = "Add task to list";

    newButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.submitCallback(newInput.value);
    });

    newForm.appendChild(newInput);
    newForm.appendChild(newButton);

    return newForm;

  }

}

/* 5. and 6. and 7. */

class App {

  constructor(newParentElement, newTaskList) {
    this.parentElement = newParentElement;
    this.taskList = newTaskList;
  }

  render() {

    this.parentElement.appendChild(this.taskList.render());
    
    //I'll be really honest, how this (pun not-intended) works really confuses me LOL
    let newTaskForm = new NewTaskForm( (description) => {
      this.addTaskToList(description);
    });
    newTaskForm.render();

    this.parentElement.appendChild(newTaskForm.render());

  }

  addTaskToList(description) {

    this.taskList.addTask(description);
    this.parentElement.innerHTML = "";
    this.render();

  }

}

let taskArray = [new Task("Make some classes", true), new Task("Arrow some functions", false)];
let newApp = new App(document.getElementById('app'), new TaskList(taskArray));
newApp.render();


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
