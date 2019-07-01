import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [{taskDesc: "Sleeping", taskPrior: "Low", taskDate: "2019-07-01"}]

  newDesc: string = ""
  newPrior: string = ""
  newDate: string = ""

  constructor() { }
  
  addTask(newDesc, newPrior, newDate)
  {
    this.tasks.push({taskDesc:newDesc, taskPrior:newPrior, taskDate:newDate})
    
    // this.blank = false
    this.newDesc = ""
    this.newPrior = ""
    this.newDate = ""
  }

  deleteTask(task)
  {
    let index = this.tasks.indexOf(task)
    this.tasks.splice(index,1)

    if(this.tasks.length <= 0)
    {
      // this.blank = true
    }
  }

  editTask(task)
  {
    let index = this.tasks.indexOf(task)
    let nTask = prompt("Edit Task:", task.taskDesc)
    let nPrior = prompt("Edit Priority:",task.taskDesc)
    let nDate = prompt("Edit Date:",task.task)

    if(nTask != null || nPrior != null)
    {
      this.tasks[index].taskDesc = nTask
      this.tasks[index].taskPrior = nPrior
      this.tasks[index].taskDate = nDate
    }
  }

  newTask()
  {
    return this.tasks
  }
}
