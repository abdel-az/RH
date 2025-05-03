import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../models/document";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  DOCUMENTS_URL = `${environment.apiUrl}/documents/`


  constructor(private http: HttpClient) { }

  public getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.DOCUMENTS_URL);
  }
}
