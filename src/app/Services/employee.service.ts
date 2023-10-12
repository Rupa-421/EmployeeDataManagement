import { Injectable } from '@angular/core';
import { API } from 'src/config';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
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
      catchError((error) => {
        // Modify the error or create a custom error object
        const customError = {
          message: 'An error occurred while fetching employee details.',
          originalError: error,
        };
  
        // You can also log the error for debugging purposes
        console.error('Error in getEmployeeDetails:', customError);
  
        // Return the custom error as an observable
        return throwError(customError);
      })
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
  dropTable(){
    console.log("in service");
    return this.http.delete(`${API}/api/Employee/`).pipe(
      tap((response) => {
        console.log(response);
        return response;
      }),
      catchError((response) => of(response.error))
    );
  }
}
