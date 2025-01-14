import { Component } from '@angular/core';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { AddTaskComponent } from '../add-task/add-task.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasklistComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskDemo';
}
