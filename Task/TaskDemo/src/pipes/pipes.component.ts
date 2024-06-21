import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CurrencyPipe,DatePipe,JsonPipe,PercentPipe,LowerCasePipe,UpperCasePipe,TitleCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
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
