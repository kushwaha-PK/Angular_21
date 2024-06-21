import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeExPipe } from '../pipe-ex.pipe';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { PipeExampleComponent } from '../pipe-example/pipe-example.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipeExampleComponent,RouterOutlet,CurrencyPipe,DatePipe,JsonPipe,PercentPipe,LowerCasePipe,UpperCasePipe,TitleCasePipe,PipeExPipe,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isChecked = false
  title = 'FilterDemo';
  price: number = 12345.6789;
  currentDate: Date = new Date();
  myString: string = 'This is a STRING in Mixed CASE';
  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  myNumber: number = 0.23;
  arrObj:any[]=[
      {fname:"Sachin",lname:"Tendulkar"},
      {fname:"Rahul",lname:"Dravid"}
    ]
}
