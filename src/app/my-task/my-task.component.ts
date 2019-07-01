import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TaskService } from '../Service/task.service';
// import { tasks } from '../new-task';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  check = false

  taskz

  constructor( public taskService: TaskService) 
  { 
    this.taskz = this.taskService.newTask()
  }

  ngOnInit() {

  }

  deleteTask(task)
  {
    this.taskService.deleteTask(task)
  }
  
  editTask(task)
  {
    this.taskService.editTask(task)
  }
}
