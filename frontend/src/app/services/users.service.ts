import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drivers } from '../models/drivers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:9000/driver';

  constructor(private http: HttpClient) { }

  createDriver(drivers:Drivers):Observable<any>{

    return this.http.post(this.apiUrl,drivers);
  }

  getDriverByEmail(email:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/email/${email}`);


    
  }
}
