import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
action:string="update";
employee:Employee;
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employee=this.employeeService.getDataForUpdate();
  }
  callUpdateEmployeeDetails(formValue:any){
    formValue['isactive']=false;
    console.log(formValue);
    this.employeeService.updateEmployeeDetails(this.employee.id,formValue).subscribe((data) => {
      console.log('data...', data);
      if (!data.error) {
        alert("employee added successfully");
        this.router.navigate(['/home']);
        return;
      }
      alert(data.error);
    }); 
    
  }

}
