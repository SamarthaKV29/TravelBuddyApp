import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managetrips',
  templateUrl: './managetrips.component.html',
  styleUrls: ['./managetrips.component.css']
})
export class ManagetripsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

}
