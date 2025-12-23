import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

dis=true;
toggleButton(){

  this.dis=!this.dis;
}


employees=[

{id:1,name:"ranjit",departmant:"IT",Salary:20000},
{id:2,name:"Kuljit",departmant:"ADMIN",Salary:90000},
{id:3,name:"diljit",departmant:"ADMIN",Salary:50000},
{id:3,name:"Vijay",departmant:"IT",Salary:30000},


];



}
