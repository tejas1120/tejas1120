import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
 Baseurl:string=environment.baseurl
 
  headers =new HttpHeaders()
               .set("content-type","application/json")

  constructor(private http:HttpClient) { }

  getData(endPoint:any){
   return this.http.get(this.Baseurl+endPoint,{"headers":this.headers})
  }

}
