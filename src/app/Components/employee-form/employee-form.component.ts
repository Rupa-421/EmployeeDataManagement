import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup!: FormGroup;
  @Input() action: string;
  @Input() employee: Employee;
  @Output() formSubmitted = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeFormGroup = this.fb.group({
      name: [this.employee.name, [Validators.required]],
      dept_name: [this.employee.dept_name, [Validators.required]],
      salary: [this.employee.salary, [Validators.required]],
      email: [this.employee.email, [Validators.required, Validators.email]],
      isactive: [this.employee.isactive, [Validators.required]],
    });
  }

  toggleActive(event: any) {
    this.employeeFormGroup.get('isactive')?.setValue(event.checked);
  }

  callSubmitEmployeeDetails(formValue: any) {
    this.formSubmitted.emit(formValue);
  }
}
