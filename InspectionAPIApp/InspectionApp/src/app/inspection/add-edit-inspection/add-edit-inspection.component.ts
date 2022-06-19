import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/shared/inspection-api.service';
import { InspectiontypeApiService } from 'src/app/shared/inspectiontype-api.service';
import { StatusApiService } from 'src/app/shared/status-api.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styles: [
  ]
})
export class AddEditInspectionComponent implements OnInit {

@Input() inspection:any;

inspectionList$!:Observable<any[]>;
inspectionTypeList$!:Observable<any[]>;
statusList$!:Observable<any[]>;

id:number=0;
status: string = "";
comments: string = "";
inspectionTypeId!:number;


  constructor(private inspectionApiService:InspectionApiService,
    private inspectiontypeApiService:InspectiontypeApiService,
    private statusApiService:StatusApiService) { }

  ngOnInit(): void {
    this.id= this.inspection.id;
    this.status= this.inspection.status;
    this.comments= this.inspection.comments;
    this.inspectionTypeId= this.inspection.inspectionTypeId;
    this.inspectionList$ = this.inspectionApiService.getInspectionList();
    this.inspectionTypeList$ = this.inspectiontypeApiService.getInspectionTypeList();
    this.statusList$ = this.statusApiService.getStatusList(); 
  }

  addInspection(){
    var inspection={
      status: this.status,
      comments:this.comments,
      isnpectionTypeId:this.inspectionTypeId
    };
    this.inspectionApiService.addInspection(inspection).subscribe(res=>{
      var closeModalButton = document.getElementById("add-edit-modal-close");
      if(closeModalButton){
        closeModalButton.click();
      }
      var showAddSucess = document.getElementById("add-sucess-alert");
      if(showAddSucess){
        showAddSucess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSucess){
          showAddSucess.style.display = "none";
        }
      }, 4000);
    });
  }

  updateInspection(){

  }

}
