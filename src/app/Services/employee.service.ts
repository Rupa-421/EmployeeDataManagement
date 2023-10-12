import { Injectable } from '@angular/core';
import { API } from 'src/config';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
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
}
