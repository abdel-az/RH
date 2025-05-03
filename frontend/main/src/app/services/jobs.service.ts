import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "http://127.0.0.1:8000/document-states/" 

@Injectable({
  providedIn: 'root'
})


export class JobsService {

  constructor(private http: HttpClient) { }


  getjobs() {
    return this.http.get<any>(url)
  }
}
