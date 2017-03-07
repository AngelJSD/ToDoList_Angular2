import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html',
})
export class TasksComponent  { 

  task: task;
  tasks: any;
  showTasks: boolean;

  constructor(){

    this.tasks = [];
    this.showTasks = false;
    this.task={
          name: 'Primera tarea',
          edit: false,
          done: false
      }
    this.tasks.push(this.task);
  }

  toggleTasks(){
      if(this.showTasks){
          this.showTasks = false;
      } else {
        this.showTasks = true;
      }
  }

  addTask(name: string){

      console.log(name);
      this.task={
          name: name,
          edit: false,
          done: false
      }
      this.tasks.push(this.task);
  }

  deleteTask(i: number){
      this.tasks.splice(i, 1);
  }

  doneTask(i: number){
      if(this.tasks[i].done){
        this.tasks[i].done=false;
      } else {
        this.tasks[i].done=true;
      }
  }

  editTask(i: number){
      if(this.tasks[i].edit){
        this.tasks[i].edit=false;
      } else {
        this.tasks[i].edit=true;
      }
  }
}

interface task{
  name: string;
  edit: boolean;
  done: boolean;
}