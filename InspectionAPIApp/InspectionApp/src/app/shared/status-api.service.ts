import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusApiService {
  readonly statusAPIURL = 'https://localhost:7157/api/';
  constructor(private httpClient:HttpClient) { }

  getStatusList():Observable<any>{
    return this.httpClient.get(this.statusAPIURL+"Status");
  }


  addStatus(data:any){
    return this.httpClient.post(this.statusAPIURL+"Status",data);
  }

  updateStatus(id:number|string, data:any){
    return this.httpClient.put(this.statusAPIURL+ `/Status/${id}`,data);
  }

  deleteStatus(id:number){
    return this.httpClient.delete(this.statusAPIURL+ `/Status/${id}`);
  }
}
