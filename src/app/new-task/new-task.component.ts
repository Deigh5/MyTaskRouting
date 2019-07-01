import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Service/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskzzz


  constructor(public taskService:TaskService) 
  { 
    this.taskzzz = this.taskService.newTask()
  }

  addTask(newDesc, newPrior, newDate)
  {
    this.taskService.addTask(newDesc, newPrior, newDate)
  }

  ngOnInit() {
    
  }
 
}
