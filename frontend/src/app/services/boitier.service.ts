import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BoitierService {


  constructor(private http: HttpClient) { }

  postboitier(data: any){
    return this.http.post<any>(environment.boitierUrl, data);
  }


  getBoitier(){
    return this.http.get<any>(environment.boitierUrl);
  }
  putBoitier(data:any, url :string){
    return this.http.put<any>(url,data);
  }

  deleteBoitier(url:string){
    return this.http.delete<any>(url);
  }
}
