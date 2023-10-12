import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeFormGroup!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeFormGroup=this.fb.group({
      name:['',[Validators.required]],
      dept_name:['',[Validators.required]],
      salary:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      isactive:['',[Validators.required]]
    })
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
