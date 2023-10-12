import { Injectable } from '@angular/core';
import { API } from 'src/config';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from '../Models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeSelected:Employee;
  constructor(private http: HttpClient) {}
  getEmployeeDetails() {
    return this.http.get(`${API}/api/Employee`).pipe(
      map((response) => {
        return response;
      }),
      catchError((response) => of(response.error))
    );
  }
  removeEmployeeByIndex(index: number) {
    return this.http.delete(`${API}/api/Employee/${index}`).pipe(
      tap((response) => {
        console.log(response);
        return response;
      }),
      catchError((response) => of(response.error))
    );
  }
  addEmployeeDetails(employeeData: any) {
    return this.http
      .post(`${API}/api/Employee`, employeeData)
      .pipe(
        tap((response) => {
          console.log('sent successfully');
        }),
        catchError((response) => of(response.error))
      );
  }
  updateEmployeeDetails(index:number,employeeData: any) {

    return this.http
      .put(`${API}/api/Employee/${index}`, employeeData)
      .pipe(
        tap((response) => {
          console.log('sent successfully');
        }),
        catchError((response) => of(response.error))
      );
  }
  setDataForUpdate(employee:Employee){
this.employeeSelected=employee;
  }
  getDataForUpdate(){
    return this.employeeSelected;
  }
}
