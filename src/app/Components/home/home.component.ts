import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
noData:boolean=false;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  deleteTable(){
    var x=confirm("Are you sure you want to delete the table?")
    if(x==true){
      this.noData=true;
      console.log("Dropping table")
      this.employeeService.dropTable();
    }
  }

}
