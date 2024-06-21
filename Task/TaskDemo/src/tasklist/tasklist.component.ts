import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ThisReceiver } from '@angular/compiler';
import { PipesComponent } from '../pipes/pipes.component';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [TaskComponent,AddTaskComponent,PipesComponent],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
tasks = [
  {id:1,desc:"Go to Office",Priority:2, Status:"Completed"},
  {id:2,desc:"Study Angular",Priority:1, Status:"In Progress"},
  {id:3,desc:"Watch Netflix",Priority:3, Status:"Pending"}
] 
JaldiHatao(tid:number):void{
  this.tasks = this.tasks.filter((task)=>
task.id!=tid)
console.log()

}

JaldiAddKro(arr:any):void
{
  this.tasks.push(arr);
  this.tasks
}
}
