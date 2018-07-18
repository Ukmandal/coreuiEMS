import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  fullImagePath1: string;
  fullImagePath2: string;
  fullImagePath3: string;
  fullImagePath4: string;

  constructor() {
    this.fullImagePath1 = './assets/img/faces/erik-lucatero-2.jpg';
    this.fullImagePath2 = './assets/img/faces/clem-onojeghuo-2.jpg';
    this.fullImagePath3 = './assets/img/faces/clem-onojeghuo-3.jpg';
    this.fullImagePath4 = './assets/img/faces/kaci-baum-2.jpg';
  }
  ngOnInit() {

  }

}
