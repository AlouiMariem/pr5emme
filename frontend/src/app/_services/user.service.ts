import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get('http://localhost:8080/api/item/all ', { responseType: "json" });
  }

  getUserBoard(): Observable<any> {
    return this.http.get("http://localhost:8080/api/user/all", { responseType: 'text' });
  }

 
  getAdminBoard(): Observable<any> {
    return this.http.get("http://localhost:8080/api/user/all", { responseType: 'json' });
  }
}
