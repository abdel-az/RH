import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RaionageService {

  
  constructor(private http:HttpClient) { }


  postRaionage(data: any){
    return this.http.post<any>(environment.raionageUrl, data);
  }


  getRaionage(){
    return this.http.get<any>(environment.raionageUrl);
  }
  putRaionage(data:any, url :string){
    return this.http.put<any>(url,data);
  }

  deleteRaionage(url:string){
    return this.http.delete<any>(url);
  }
}
