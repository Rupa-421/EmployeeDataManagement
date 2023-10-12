import { Injectable } from '@angular/core';
import { API } from 'src/config';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 
    
  }
  getEmployeeDetails(){
    return this.http.get(`${API}/api/Employee`).pipe(map((response)=>{
      return response;
    }),
    catchError((response)=>of(response.error)))
  }
}
