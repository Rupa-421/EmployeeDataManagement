import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeFormGroup=new FormGroup({
      name:new FormControl(''),
      dept_name:new FormControl(''),
      salary:new FormControl(''),
      email:new FormControl(''),
      isactive:new FormControl('')
    })
  }

}
