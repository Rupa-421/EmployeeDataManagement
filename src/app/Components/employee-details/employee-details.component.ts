import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { EmployeeService } from 'src/app/Services/employee.service';
export interface Employee{
  id:number,
  name:string,
  dept_name:string,
  salary:number,
  email:string,
  isactive:boolean
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],

})
export class EmployeeDetailsComponent implements OnInit {
  employee_data:Employee[];
  displayedColumns:string[]=['id','name','dept_name','salary','email','isactive','update','remove'];
  dataSource:any;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  
     this.employeeService.getEmployeeDetails().subscribe((data=>{
      this.employee_data=data;
      this.dataSource=this.employee_data;
     }))
  }

}
