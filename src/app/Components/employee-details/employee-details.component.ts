import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],

})
export class EmployeeDetailsComponent implements OnInit {
  employee_data:Employee[];
  updateEmployee:Employee;
  displayedColumns:string[]=['id','name','dept_name','salary','email','isactive','update','remove'];
  dataSource:any;
  constructor(private employeeService:EmployeeService,private cd:ChangeDetectorRef,private router:Router) { }

  ngOnInit(): void {
  
     this.employeeService.getEmployeeDetails().subscribe((data=>{
      this.employee_data=data;
      console.log(data);
      this.dataSource=this.employee_data;
     }))
  }
removeEmployeeByIndex(index:number){
  this.employeeService.removeEmployeeByIndex(index).subscribe((data) => {
    console.log('data...', data);
    if (!data) {
      alert("employee data deleted successfully");
      return;
    }
    alert(data.error);
  }); 
}
updateEmployeeByIndex(index:number){
  this.updateEmployee=this.employee_data[index];
  this.employeeService.setDataForUpdate(this.updateEmployee);
  this.router.navigate(['/update']);
}
}
