import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIURL = 'https://localhost:7157/api/';

  constructor(private httpClient:HttpClient) { }

  getInspectionList():Observable<any>{
    return this.httpClient.get(this.inspectionAPIURL+"Inspections");
  }


  addInspection(data:any){
    return this.httpClient.post(this.inspectionAPIURL+"Inspections",data);
  }

  updateInspection(id:number|string, data:any){
    console.log(this.inspectionAPIURL+ `/Inspections/${id}`);
    return this.httpClient.put(this.inspectionAPIURL+ `Inspections/${id}`,data);
  }

  deleteInspection(id:number){
    return this.httpClient.delete(this.inspectionAPIURL+ `Inspections/${id}`);
  }
}
