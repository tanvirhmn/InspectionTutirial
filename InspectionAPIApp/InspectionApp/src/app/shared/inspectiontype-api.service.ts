import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectiontypeApiService {
  readonly inspectionTypeAPIURL = 'https://localhost:7157/api/';
  constructor(private httpClient:HttpClient) { }

  getInspectionTypeList():Observable<any>{
    return this.httpClient.get(this.inspectionTypeAPIURL+"InspectionTypes");
  }


  addInspectionType(data:any){
    return this.httpClient.post(this.inspectionTypeAPIURL+"InspectionTypes",data);
  }

  updateInspectionType(id:number|string, data:any){
    return this.httpClient.put(this.inspectionTypeAPIURL+ `/InspectionTypes/${id}`,data);
  }

  deleteInspectionType(id:number){
    return this.httpClient.delete(this.inspectionTypeAPIURL+ `/InspectionTypes/${id}`);
  }
}
