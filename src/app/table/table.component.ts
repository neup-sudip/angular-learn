import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlanListConstant, YesNoConstant } from '../models/constants';
import { PlanRequest } from '../models/people';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  sidebarVisible: boolean = false;

  rowsList: Array<PlanRequest> = [
    { id: 1, plan: 'John Doe', age: 28, enable: "Y", uiAdded: "N" },
    { id: 2, plan: 'Jane Smith', age: 32, enable: "N", uiAdded: "N" },
    { id: 3, plan: 'Samuel Green', age: 45, enable: "Y", uiAdded: "N" },
    { id: 4, plan: 'Alice Johnson', age: 25, enable: "N", uiAdded: "N" },
  ];

  yesNo = YesNoConstant;
  planList = PlanListConstant;

  newRow!: PlanRequest;
  openNew: boolean = false;
  toRemove: number[] = [];
  newAdded: PlanRequest[] = [];

  constructor() {}

  ngOnInit(): void {
    this.resetNew()
  }

  confirmAddNew(){
    this.newRow.id = this.rowsList.length + 1 ;
    this.rowsList.unshift(this.newRow);
    this.newAdded.push(this.newRow);
   this.resetNew()
  }

  deleteNew(id: number){
    this.toRemove.push(id)
  }

  handleSave(){
    this.rowsList = this.rowsList.filter(item => !this.toRemove.includes(item.id))
    this.newAdded = this.newAdded.filter(item => !this.toRemove.includes(item.id))
  }

  resetNew(){
    this.newRow = new PlanRequest("plan-one", 1, "N", "Y");
    this.openNew = false;
  }
}
