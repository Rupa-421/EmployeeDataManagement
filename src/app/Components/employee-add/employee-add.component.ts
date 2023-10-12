import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeFormGroup!: FormGroup;
  action:string="add"
  employee:Employee={name:"",dept_name:"",salary:0,email:"",isactive:false,id:0}
  constructor(private fb:FormBuilder,private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    
  }
  callAddEmployeeDetails(formValue:any){
    formValue['isactive']=false;
    console.log(formValue);
    this.employeeService.addEmployeeDetails(formValue).subscribe((data) => {
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
