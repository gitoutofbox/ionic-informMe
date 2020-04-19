import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public authors: Array<any> = [
    {
      name: "Sourav Paul",
      id: 399270,
      email: "sourav3.paul3@cognizant.com",
      img: 'assets/img/authors/sourav.jpg'
    },
    {
      name: "Hiranmoy Ghatak",
      id: 519392,
      email: "hiranmoy.ghatak@cognizant.com",
      img: 'assets/img/authors/ghatak.jpg'
    },
    {
      name: "Prasenjit Chakraborty",
      id: 495602,
      email: "prasenjit.chakraborty2@cognizant.com",
      img: 'assets/img/authors/p.jpg'
    }

  ]
  constructor() {}

}
