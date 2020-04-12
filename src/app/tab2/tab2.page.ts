import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public reportedList: Array<any> = [];
  constructor() {}
  ngOnInit() {
    this.getReportedList();
  }
  getReportedList() {
    this.reportedList = [
      {
        person_name: "Sunil Sarkar",
        person_address: '2/6, BBD Bag, Kolkata-28, Landmark-Durga Mandir',
        created_on: '2020-04-12 10:30:25'
      },
      {
        person_name: "Nimai Haldar",
        person_address: '2/7, BBD Bag, Kolkata-28, Landmark-Dimond Club',
        created_on: '2020-04-10 08:20:15'
      }
    ]
  }
}
