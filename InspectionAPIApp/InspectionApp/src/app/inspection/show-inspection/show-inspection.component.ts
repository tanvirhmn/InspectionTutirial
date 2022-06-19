import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { InspectionApiService } from 'src/app/shared/inspection-api.service';
import { InspectiontypeApiService } from 'src/app/shared/inspectiontype-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styles: [
  ]
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;
  inspectionTypesList:any=[];

  inspectionTypesMap:Map<number,string> = new Map();

  modalTitle:string="";
  activateAddEditInspectionComponent:boolean=false;
  inspection:any;

  constructor(private inspectionApiService:InspectionApiService, private inspectiontypeApiService:InspectiontypeApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.inspectionApiService.getInspectionList();
    this.inspectionTypesList$ = this.inspectiontypeApiService.getInspectionTypeList();
    this.refreshInspectionTypesMap();

    //this.inspectionList$.subscribe(data=> {
      //this.inspectionTypesList = data;

      //console.log(this.inspectionTypesList);
    //});
  }

  refreshInspectionTypesMap() {
    this.inspectiontypeApiService.getInspectionTypeList().subscribe(data => {
      this.inspectionTypesList = data;
      console.log(this.inspectionTypesList);
      for(let i = 0; i < this.inspectionTypesList.length; i++)
      {
        var key:number = +this.inspectionTypesList[i].id;
        var value:string = this.inspectionTypesList[i].inspectionName;
        this.inspectionTypesMap.set(key, value);
      }
    });
  }

  

  addModal(){
      this.inspection = {
        id: 0,
        status: null,
        comments: null,
        inspectionTypeId: null
      };
      this.activateAddEditInspectionComponent = true;
      this.modalTitle = "Add Inspection";
      //console.log("Modal Add");
  }

}
