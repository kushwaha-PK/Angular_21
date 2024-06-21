import { Component,EventEmitter,Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TasklistComponent,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() addKro = new EventEmitter()
Task:any={
  id:'',
  desc:'',
  Priority:'',
  Status:''
}


Add():void
{
  console.log(this.Task)
  this.addKro.emit(this.Task)
}
}
