import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SalleService {

  

  constructor(private http: HttpClient) { }

  postSalle(data: any){
    return this.http.post<any>(environment.salleUrl, data);
  }


  getSalle(){
    return this.http.get<any>(environment.salleUrl);
  }
  putSalle(data:any, url :string){
    return this.http.put<any>(url,data);
  }

  deleteSalle(url:string){
    return this.http.delete<any>(url);
  }

  getsalledetails(url : string){

    return  this.http.get<any>(url);
    
  }

}
