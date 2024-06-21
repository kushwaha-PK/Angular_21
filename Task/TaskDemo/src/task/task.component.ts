import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() taskitme:any;
@Output() hatao = new EventEmitter();
onRemove(tid:number):void
{
  this.hatao.emit(tid)
}
}
