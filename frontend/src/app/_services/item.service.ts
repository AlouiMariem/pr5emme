import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  addItem(title: string,discription: string,image: File,initialPrice: string,author: string,openAt: Date,closeAt: Date): Observable<any> {
    return this.http.post("http://localhost:8080/api/Item/create", {
      title,
      discription,
      image,
      initialPrice,
      author,
      openAt,
      closeAt
    }, httpOptions);
  }
}
