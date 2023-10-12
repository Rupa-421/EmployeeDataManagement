import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],

})
export class EmployeeDetailsComponent implements OnInit {
  employee_data:any;
  updateEmployee:Employee;
  displayedColumns:string[]=['id','name','dept_name','salary','email','isactive','update','remove'];
  dataSource:any;
  @Input() noData:boolean;
  loading:boolean=false;
  constructor(private employeeService:EmployeeService,private cd:ChangeDetectorRef,private router:Router) { }

  ngOnInit(): void {
  this.loading=true
     this.employeeService.getEmployeeDetails().subscribe((data)=>{
    this.loading=false;
      this.employee_data=data;
      console.log(data);
      this.dataSource = new MatTableDataSource<Employee>(this.employee_data);

     },(error)=>{
      this.loading=false;
      this.noData=true;

     })
  }
removeEmployeeByIndex(index:number,id:number){
  this.employeeService.removeEmployeeByIndex(id).subscribe((data) => {
    console.log('data...', data);
    if (!data) {
      alert("employee data deleted successfully");
      this.employee_data.splice(index,1);
      console.log(this.employee_data);
      this.dataSource= new MatTableDataSource<Employee>(this.employee_data);

      this.cd.detectChanges();
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
