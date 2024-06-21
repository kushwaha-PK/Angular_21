import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[FormsModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Pooja';
  Fname:string=''
  Lname:string=''
 // newNames:string ='';

  names:any[] = [{FirstName:'Pooja',LastName:'Kushwaha'}]

  remove(n1:number):void
  {
    this.names.splice(n1,1)
  }
  Add():void
  {
    this.names.push(this.Fname,this.Lname)
    this.Fname=''
    this.Lname=''
  }
  Sort():void{
    this.names.sort(  )
  }
}
